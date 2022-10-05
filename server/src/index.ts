import express from 'express';
import cors from 'cors';
import auth from './middlewares/auth';

const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);
app.use(auth);

app.listen(port, () => console.log('⚡SERVER RUNNING AT PORT 3000⚡'));
