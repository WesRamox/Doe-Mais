import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register = async (name: string, email: string, password: string, bloodtype: string) => {
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("E-mail já cadastrado!");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, bloodtype, role: "donor" });
  await user.save();
  
  return { message: "Usuário cadastrado com sucesso!" };
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuário não encontrado!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Senha inválida!");

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
  
  return { token, user: { id: user._id, name: user.name, email: user.email, bloodtype: user.bloodtype, role: user.role } };
};
