import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import shopController from "./controller/shop.controller";
import productController from "./controller/product.controller";
import makeUploader from "./libs/utils/uploader";

routerAdmin.get("/", shopController.goHome);

routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);

routerAdmin
  .get("/signup", shopController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    shopController.processSignup
  );

routerAdmin.get("/checkName", shopController.checkAuthSession);

routerAdmin.get("/logout", shopController.logout);

// //PRODUCTS

routerAdmin.get(
  "/product/all",
  shopController.verifyShop,
  productController.getAllProducts
);

routerAdmin.post(
  "/product/create",
  shopController.verifyShop,
  makeUploader("products").array("productImages", 5),
  // uploadProductImage.single('productImage'),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  shopController.verifyShop,
  productController.updateChoosenProduct
);

routerAdmin.get("/user/all", shopController.verifyShop, shopController.getUsers);

export default routerAdmin;
