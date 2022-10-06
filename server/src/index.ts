import express from 'express';
import cors from 'cors';
import notesRouter from './routes/NotesRouter';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(notesRouter);
app.listen(port, () => console.log(`⚡SERVER RUNNING AT PORT ${port}⚡`));
