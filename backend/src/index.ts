import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import connectDB from "./db";
import addressRoutes from "./routes/addressRoutes";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(helmet());

connectDB();

app.use('/', addressRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



