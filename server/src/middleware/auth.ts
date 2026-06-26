import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  userId: string;
  email: string;
};

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.daemon_token;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is required');
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
    };
    return next();
  } catch {
    return res.status(401).json({ error: 'Not authenticated' });
  }
}
