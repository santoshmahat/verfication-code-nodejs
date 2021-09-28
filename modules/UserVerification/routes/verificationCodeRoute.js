import express from "express";
import verificationCodeController from "../controller/verificationCodeController";

const router = express.Router();

router.post("/verify-code", verificationCodeController.verifiyCode);

export default router;
