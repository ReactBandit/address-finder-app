import axios from "axios";

const fetchAddress = (query: string) => {
    return axios
        .get('http://localhost:3001/address', {
            params: { query },
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error fetching address:', error);
            throw error;
        });
};


export {fetchAddress}
