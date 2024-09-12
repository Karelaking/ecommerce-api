import { Router } from "express";
import {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteAllProducts,
  deleteProduct,
} from "../controllers/products.controllers";

const productsRouter = Router();

// define routes for get list of products
productsRouter.route("/").get(getAllProducts);

// define routes for add new product
productsRouter.route("/").post(addProduct);

// define routes for get a single product
productsRouter.route(":id").get(getProduct);

// define routes for update a product
productsRouter.route(":id").patch(updateProduct);

// define routes for delete a product
productsRouter.route(":id").delete(deleteProduct);

// define routes for delete all products
productsRouter.route("/").delete(deleteAllProducts);

export default productsRouter;
