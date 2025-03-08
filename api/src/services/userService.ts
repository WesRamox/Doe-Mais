import User from "../models/User";

export const getUserProfile = async (userId: string) => {
  const user = await User.findById(userId).select("-password"); // Evita expor a senha
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }
  return user;
};