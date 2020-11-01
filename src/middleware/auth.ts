import { config } from 'dotenv';

config();

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface payload {
  UserId: number;
  iat: number;
  exp: number;
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('Token not provider');
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY_TOKEN as string);
    const { UserId } = data as payload;

    req.UserId = UserId;

    return next();
  } catch {
    return res.status(401);
  }
};

export default authMiddleware;