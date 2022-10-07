import express from 'express';
import cors from 'cors';
import userRouter from './routes/UserRouter';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(userRouter);
app.listen(port, () => console.log(`⚡SERVER RUNNING AT PORT ${port}⚡`));
