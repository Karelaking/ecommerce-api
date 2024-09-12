import asyncHandler from "../utils/asyncHandler.js";

// Function to handle to add a new order
const addOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Order added successfully",
    order: req.body,
  });
});

// Function to handle to remove a order
const removeOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Order removed successfully",
    orderId: req.params.orderId,
  });
});

// Function to handle to update a order
const updateOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Order updated successfully",
    orderId: req.params.orderId,
    updatedOrder: req.body,
  });
});

// Function to handle to get all orders
const getAllOrders = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "All orders retrieved successfully",
    orders: [],
  });
});

// Function to handle to get a specific order
const getOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Order retrieved successfully",
    order: { id: req.params.orderId },
  });
});

// TODO: delete all orders

export { addOrder, removeOrder, updateOrder, getAllOrders, getOrder };
