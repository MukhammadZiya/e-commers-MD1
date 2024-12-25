import { Request, Response } from "express";
import ProductService from "../models/Product.service";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import { AdminRequest } from "../libs/types/member";


const productService = new ProductService()

const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
    try {
      console.log("getAllProducts");
        res.render("products");
    } catch (err) {
      console.log("Error: getAllProducts", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

  productController.createNewProduct = async (req: Request, res: Response) => {
    try {
      console.log("createNewProduct");
        res.send("Done!");
    } catch (err) {
      console.log("Error: createNewProduct", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

  productController.updateChoosenProduct = async (req: Request, res: Response) => {
    try {
      console.log("updateChoosenProduct");
  
    } catch (err) {
      console.log("Error: updateChoosenProduct", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

export default productController;