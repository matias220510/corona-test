import { useState, useEffect } from 'react';

function useStats (url) {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    useEffect (() => {
        async function fetchData () {
            setError();
            console.log('fetching data!');
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => {
                    setError(err);
                });
            setStats(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {
        stats,
        loading,
        error
    }; 
}

export default useStats;