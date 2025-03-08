import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Interface para tipar o payload do token
interface DecodedToken extends JwtPayload {
  id: string;
  role: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: DecodedToken;
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Acesso negado!" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
    req.user = decoded; // Agora tipado corretamente
    next();
  } catch {
    res.status(403).json({ message: "Token inválido ou expirado!" });
  }
};
 