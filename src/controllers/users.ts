import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "create user",
    users: req.body,
  });
};
