import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import shopController from "./controller/shop.controller";
import productController from "./controller/product.controller";

routerAdmin.get("/", shopController.goHome);

routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);

routerAdmin
  .get("/signup", shopController.getSignup)
  .post("/signup", shopController.processSignup);

routerAdmin.get("/checkName", shopController.checkAuthSession);

routerAdmin.get("/logout", shopController.logout);

// //PRODUCTS

routerAdmin.get(
  "/product/all",
  shopController.verifyShop,
  productController.getAllProducts
);

routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChoosenProduct);

export default routerAdmin;
