import express, { Request, Response } from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

router.get("/", memberController.goHome);

router.get("/", memberController.getLogin);

router.get("/", memberController.getSignup);

export default router;
