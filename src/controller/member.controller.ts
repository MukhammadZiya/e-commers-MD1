import { T } from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};

memberController.goHome = (req: Response, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

memberController.getLogin = (req: Response, res: Response) => {
  try {
    res.send("login Page")
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};


memberController.getSignup = (req: Response, res: Response) => {
  try {
    res.send("signup Page")
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};


export default memberController
