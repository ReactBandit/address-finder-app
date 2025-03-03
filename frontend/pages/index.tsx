import { useState } from 'react';
import {fetchAddress} from "../service";
import {validateInput} from "../utils/validateAddressInput";

export default function Home() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        if (!validateInput(query)) {
            setResult('Invalid input. Please enter a valid address or postal code.');
            return;
        }
        fetchAddress(query)
            .then((result) => {
                setResult(result.features[0].place_name);
            })
            .catch(() => {
                setResult('Failed to fetch address. Please try again.');
            });
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
            <button onClick={handleSearch}>Search</button>
            <p>{result}</p>
        </div>
    );
}
