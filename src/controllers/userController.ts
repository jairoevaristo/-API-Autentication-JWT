import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const userExist = await repository.findOne({ where: { email } });

    if (userExist) {
      return res.status(409);
    }
    
    const user = await repository.create({ email, senha });
    await repository.save(user);

    return res.status(201).send(user);
  }
}

export default new UserController();