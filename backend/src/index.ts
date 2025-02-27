import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
