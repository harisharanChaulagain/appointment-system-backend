import { Router } from "express";
import {
  registerUser,
  loginUser,
  googleLoginOrRegister,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-loginOrRegister", googleLoginOrRegister);

router.get("/", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to the protected home page!" });
});

export default router;
