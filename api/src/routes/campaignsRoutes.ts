import express from "express";
import { createCampaignController, listOfCampaignsController } from "../controllers/campaignsController";

const router = express.Router();

/**  
 * @swagger
 * /api/campaigns:
 *   get:
 *     summary: Rota protegida pelo middleware authenticate
 *     description: Rota para listar todas as campanhas
 *     responses: 
 *       200:
 *         description: Retorna a lista de campanhas
 *       400:
 *         description: Erro ao listar campanhas
 *       401:
 *         description: Não autorizado
 */
router.get("/", listOfCampaignsController);

/**
 * @swagger
 * /api/campaigns:
 *   post:
 *     summary: Cria uma nova campanha
 *     description: Rota para criar uma nova campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: string
 *               bloodTypesNeeded:
 *                 type: array
 *                 items:
 *                   type: string
 *               createdBy:
 *                 type: string
 *     responses: 
 *       201:
 *         description: Campanha criada com sucesso
 *       400:
 *         description: Erro ao criar campanha
 */

router.post("/", createCampaignController);

export default router;