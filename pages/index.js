import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import styled from 'styled-components';

const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
`;

export default function Index() {
    return (
        <div>
            <Title>Total en todo el mundo:</Title>
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector></CountrySelector>
        </div>
    );
}