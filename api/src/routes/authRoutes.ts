import express from "express";
import { registerUser, loginUser } from "../controllers/authController";
// import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


// Rota protegida pelo middleware authenticate
// router.get("/campaigns", authenticate, (req, res) => {
//   res.json({ message: "Campanhas" });
// });

export default router;