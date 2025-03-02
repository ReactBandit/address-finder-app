import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    const fetchAddress = async () => {
        try {
            const response = await axios.get('http://localhost:3001/address', {
                params: { query },
            });
            setResult(response.data.features[0]?.place_name || 'No results found');
        } catch (error) {
            setResult('Error fetching address');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Address Finder</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter address or ZIP"
            />
            <button onClick={fetchAddress}>Search</button>
            <p>{result}</p>
        </div>
    );
}
