import { Router } from "express";
import { getProfile } from "../controllers/userController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Listar dados do usuário logado
 *     description: Retorna os dados do usuário autenticado com base no token JWT fornecido.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "65f0c2d1a9b5d8a6d4f9b2a3"
 *                 name:
 *                   type: string
 *                   example: "João Silva"
 *                 email:
 *                   type: string
 *                   example: "joao@email.com"
 *       401:
 *         description: Acesso negado - Token não fornecido ou inválido
 *       403:
 *         description: Token expirado ou sem permissão
 */

router.get("/profile", authenticate, getProfile);

export default router;
