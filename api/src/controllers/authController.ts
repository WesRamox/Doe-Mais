import { Request, Response } from "express";
import { register, login } from "../services/authService";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, bloodtype } = req.body;
    const response = await register(name, email, password, bloodtype);
    res.status(201).json(response);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const response = await login(email, password);
    res.json(response);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
