import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';

const CountrySelectorContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

export default function CountrySelector () {
    const { stats: countries, loading, error } = useStats(
        'https://covid19.mathdro.id/api/countries'
      );
    const [selectedCountry, setSelectedCountry] = useState('ARG')
    if (!countries) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <CountrySelectorContainer>
            <h2>Currently Showing {selectedCountry}</h2>
            <select onChange={e => {
                setSelectedCountry(e.target.value);
            }}>
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