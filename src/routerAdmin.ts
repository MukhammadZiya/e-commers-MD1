import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import shopController from "./controller/shop.controller";

routerAdmin.get("/", shopController.goHome);

routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);

routerAdmin
  .get("/signup", shopController.getSignup)
  .post("/signup", shopController.processSignup);

export default routerAdmin;
