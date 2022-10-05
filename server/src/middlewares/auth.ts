import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction): any => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
};

export default auth;
