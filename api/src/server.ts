import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import campaignsRoutes from "./routes/campaignsRoutes";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";


// Swagger Imports
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API da aplicação Doe+",
      version: "1.0.0",
      description: "Documentação da API Doe+",
      contact: {
        name: "Wesley Ramos",
        email: "wesleydev.pessoal@gmail.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        BearerAuth: []
      }
    ]
  },
  apis: [path.join(__dirname, "routes/*.ts")] // Caminho correto
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignsRoutes);
app.use("/api/users", userRoutes); // Prefixo '/users'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));