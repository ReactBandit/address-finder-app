import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.get('/address', async (req:any, res:any) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
            {
                params: {
                    access_token: process.env.MAPBOX_API_KEY,
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch address data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



