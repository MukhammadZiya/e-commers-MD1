import ProductModel from "../schema/product.model";

class productService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}

export default productService;