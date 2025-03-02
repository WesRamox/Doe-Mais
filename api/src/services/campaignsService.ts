import Campaign from "../models/Campaign";
import User from "../models/User"; // Certifique-se de que o caminho está correto

// Service para listar todas as campanhas
export const listCampaigns = async () => {
  return await Campaign.find();
}

// Service para criar uma campanha
export const createCampaign = async (
  name: string,
  description: string,
  date: Date,
  location: string,
  bloodTypesNeeded: string[],
  createdBy: string // Este deve ser o ID de um usuário existente
) => {
  // Verifique se o usuário existe
  const user = await User.findById(createdBy);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  // Verifique se o usuário tem a função de administrador
  if (user.role !== "admin") {
    throw new Error("Usuário não tem permissão para criar campanhas");
  }

  const campaign = new Campaign({
    name,
    description,
    date,
    location,
    bloodTypesNeeded,
    createdBy
  });
  await campaign.save();

  return { message: "Campanha criada com sucesso!" };
};
