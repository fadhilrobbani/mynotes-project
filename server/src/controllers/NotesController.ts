import express, { Request, Response } from 'express';

const createNote = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  res.status(200).send(title);
};

const findAllNotes = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'halo' });
};

const findNote = (req: Request, res: Response) => {
  res.status(200).json({ message: `${req.params.id}` });
};

export { findAllNotes, createNote, findNote };
