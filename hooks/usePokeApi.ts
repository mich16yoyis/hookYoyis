import { useEffect, useState } from 'react';

const usePokeApi = (limit = 151, offset = 0) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                if (response.status !== 200) {
                    throw new Error("te pasaste de lanza");
                }
                const data = await response.json();
                setList(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPoke();
    }, [limit, offset]);

    return { list, loading, error };
};

export default usePokeApi;
