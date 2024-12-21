import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";

const shopController: T = {};

shopController.goHome = (req: Response, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

shopController.getLogin = (req: Response, res: Response) => {
  try {
    console.log("getLogin");
    res.send("login Page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

shopController.getSignup = (req: Response, res: Response) => {
  try {
    console.log("getSignup");
    res.send("signup Page");
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

shopController.processLogin = (req: Response, res: Response) => {
  try {
    console.log("processLogin");
    res.send("processLogin Page");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

shopController.processSignup = (req: Response, res: Response) => {
  try {
    console.log("processSignup");
    res.send("processSignup Page");
  } catch (err) {
    console.log("Error, processSignup", err);
  }
};

export default shopController;
