import express from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authenticate, (req, res) => {
  res.json(req.user)
});

export default router;