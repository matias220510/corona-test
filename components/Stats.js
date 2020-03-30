import styled from 'styled-components';
import useStats from '../utils/useStats';

const BlockWrapper = styled.div`
    display: flex;
    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

const StatBlock = styled.div`
    background: lightgray;
    flex-basis: calc(33.333% - 20px);
    margin: 10px;
    border-radius: 2rem;
    font-size: 1rem;
    padding: 2rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;

export default function Stats ({url}) {
    const { stats, loading, error} = useStats(url);
    if (!stats) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <BlockWrapper>
            <StatBlock className="statBlock">
                <h3>Confirmados</h3>
                <span>{stats.confirmed.value}</span>
            </StatBlock>
            <StatBlock className="statBlock">
                <h3>Recuperados</h3>
                <span>{stats.recovered.value}</span>
            </StatBlock>
            <StatBlock className="statBlock">
                <h3>Muertes</h3>
                <span>{stats.deaths.value}</span>
            </StatBlock>
        </BlockWrapper>
    )
};