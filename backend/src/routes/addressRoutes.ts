import express from 'express';
import axios from 'axios';
import Address from '../models/address';
import { validateAddressInput } from '../utils/validateAddressInput';

const router = express.Router();

router.get('/address', async (req:any, res:any) => {
    const query = req.query.query;

    if (!validateAddressInput(query)) {
        return res.status(400).json({ error: 'Invalid address input' });
    }

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
        const addressData = new Address({
            query,
            data: response.data,
            results: response.data.features,
        });

        try {
            await addressData.save();
        } catch (error) {
            console.error('Error saving address:', error);
        }

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch address data' });
    }
});

export default router;
