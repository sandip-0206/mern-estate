import express from "express";
import {
  Google,
  SignIn,
  SignUp,
  signOut,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", Google);
router.get("/signout", signOut);

export default router;
