import { config } from 'dotenv';

config();

import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async index(req: Request, res: Response) {
    const repository = getRepository(User);
    
    const users = await repository.find();
    const userActive = await repository.findOne(req.UserId);

    return res.status(200).send({ 
      data: users, 
      userActive: userActive?.email
    })
  }

  async Authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const user = await repository.findOne({ email });

    if (!user) {
      return res.status(402);
    }

    const correctPassword = await bcrypt.compare(senha, user.senha);
    
    if (!correctPassword) {
      return res.status(402).send('Password Invalid');
    }

    const token = jwt.sign({ UserId: user.id}, process.env.SECRET_KEY_TOKEN as string, {
      expiresIn: '1d'
    });

    return res.json({
      user,
      token,
    })

  } 
};

export default new AuthController();