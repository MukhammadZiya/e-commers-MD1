import express, { Request, Response } from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);


router.get("/member/detail", memberController.verifyAuth)

export default router;
