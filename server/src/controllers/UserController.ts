import express, { Request, Response } from 'express';
import response from '../util';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: password,
        email: email,
      },
    });
    response(res, 200, true, 'success to add user', user);
  } catch (error) {
    response(res, 500, false, 'failed to add user');
  }
};

const findAllUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    response(res, 200, true, 'succes find all user', users);
  } catch (error) {
    response(res, 500, false, 'failed to find all user');
  }
};

const findUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (user !== null) {
      response(res, 200, true, 'user is found', user);
    } else {
      response(res, 404, false, 'user not found', null);
    }
  } catch (error) {
    response(res, 500, false, 'failed get user');
  }
};

export { register, findAllUser, findUserById };
