import styled from 'styled-components';
import useStats from '../utils/useStats';

const BlockWrapper = styled.div`
    display: flex;
    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

const StatBlock = styled.div`
    flex-basis: calc(33.333% - 20px);
    margin: 10px;
    border-radius: 2rem;
    font-size: 1rem;
    padding: 2rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

    ${props => props.confirmed && `
        background-image: linear-gradient(-20deg,#ff9900 0%,#ff0000bf 100%);
    `}

    ${props => props.recovered && `
        background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    `}

    ${props => props.deaths && `
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    `}
    
`;

export default function Stats ({url}) {
    const { stats, loading, error} = useStats(url);
    if (!stats) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <BlockWrapper>
            <StatBlock confirmed>
                <h3>Confirmados</h3>
                <span>{stats.confirmed.value}</span>
            </StatBlock>
            <StatBlock recovered>
                <h3>Recuperados</h3>
                <span>{stats.recovered.value}</span>
            </StatBlock>
            <StatBlock deaths>
                <h3>Muertes</h3>
                <span>{stats.deaths.value}</span>
            </StatBlock>
        </BlockWrapper>
    )
};