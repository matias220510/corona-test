import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';

const CountrySelectorContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

export default function CountrySelector () {
    function handleOnChange (e) {
        const selected = e.target;
        setSelectedCountry(selected.value);
        const countryName = selected.options[selected.selectedIndex].text;
        setSelectedCountryName(countryName);
    }

    const { stats: countries, loading, error } = useStats(
        'https://covid19.mathdro.id/api/countries'
    );
    const [selectedCountry, setSelectedCountry] = useState('ARG');
    const [selectedCountryName, setSelectedCountryName] = useState('Argentina');
    
    if (!countries) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <CountrySelectorContainer>
            <h2>Actualmente mostrando datos de: {selectedCountryName}</h2>
            <select onChange={handleOnChange}>
                {Object.entries(countries.countries).map(([, country]) => (
                    <option 
                        key={country.iso3} 
                        value={country.iso3}
                        selected={selectedCountry === country.iso3}
                    >
                        {country.name}
                    </option>
                ))}
            </select>
            
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </CountrySelectorContainer>
    )
};