import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Response, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Response, res: Response) => {
  try {
    res.send("login Page")
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};


restaurantController.getSignup = (req: Response, res: Response) => {
  try {
    res.send("signup Page")
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};


export default restaurantController
