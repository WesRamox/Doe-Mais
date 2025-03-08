import { Request, Response } from "express";
import { getUserProfile } from "../services/userService";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id; // Pega o ID do usuário autenticado
    if (!userId) {
      res.status(401).json({ message: "Usuário não autenticado!" });
      return;
    }

    const user = await getUserProfile(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Perfil não encontrado." });
  }
};