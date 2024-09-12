import { Router } from "express";
import {
  addToCart,
  updateToCart,
  removeFromCart,
} from "../controllers/cart.controllers";

const cartRouter = Router();

// define routes for add items in cart
cartRouter.route("/").post(addToCart);

// define routes for remove items from cart
cartRouter.route("/:id").delete(removeFromCart);

// define routes for update items in cart
cartRouter.route("/:id").patch(updateToCart);

export default cartRouter;
