import express from 'express';
import {
  register,
  findAllUser,
  findUserById,
} from '../controllers/UserController';

const userRouter = express.Router();
userRouter.get('/', findAllUser);
userRouter.get('/user/:id', findUserById);
userRouter.post('/register', register);

export default userRouter;
