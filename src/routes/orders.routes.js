import { Router } from "express";
import { addOrder, updateOrder, removeOrder, getAllOrders, getOrder } from "../controllers/orders.controllers";

const ordersRouter = Router();

// Define routes for create a new order
ordersRouter.route("/").post(addOrder);

// Define routes for get all orders
ordersRouter.route("/").get(getAllOrders);

// Define routes for get a order details
ordersRouter.route("/:id").get(getOrder);

// Define routes for update a order
ordersRouter.route("/:id").patch(updateOrder);

// Define routes for delete a order
ordersRouter.route("/:id").delete(removeOrder);

// TODO: Remove all orders

export default ordersRouter;

