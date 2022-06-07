import { Request, Response } from 'express';

export const handleDefaultRequest = (req: Request, res: Response) => {
  res.json({
    error: -3,
    msg: `${req.method}: ${req.originalUrl} --> Route or method not implemented`,
  });
};
