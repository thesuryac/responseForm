import express from "express";
import { postSignup } from "../controllers/signup.controller.js";

const router = express.Router();

router.post("/signup", postSignup);

export default router;
