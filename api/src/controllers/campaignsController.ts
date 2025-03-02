import { Request, Response } from "express";
import { createCampaign, listCampaigns } from "../services/campaignsService";

// Controlador para listar todas as campanhas
export const listOfCampaignsController = async (req: Request, res: Response) => {
  try {
    const result = await listCampaigns();
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

// Controlar para criar uma nova campanha
export const createCampaignController = async (req: Request, res: Response) => {
  try {
    const { name, description, date, location, bloodTypesNeeded, createdBy } = req.body;

    const result = await createCampaign(name, description, date, location, bloodTypesNeeded, createdBy);
    res.status(201).send(result);

  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}