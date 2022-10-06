import express from 'express';
import {
  createNote,
  findAllNotes,
  findNote,
} from '../controllers/NotesController';

const notesRouter = express.Router();
notesRouter.get('/', findAllNotes);
notesRouter.get('/notes/:id', findNote);
notesRouter.post('/notes/new', createNote);

export default notesRouter;
