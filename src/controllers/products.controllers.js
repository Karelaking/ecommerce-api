import asyncHandlers from "../utils/asyncHandlers.js";

// Function to handle get all products list request
const getAllProducts = asyncHandlers(async (req, res) => {
  return res.status(200).json({
    message: "Get all products list",
    data: [],
  });
});

// Function to handle get a product request
const getProduct = asyncHandlers(async (req, res) => {
  return res.status(200).json({
    message: "Get product",
    data: {},
  });
});

// Function to handle adding a new product request
const addProduct = asyncHandlers(async (req, res) => {
  return res.status(201).json({
    message: "Add product",
    data: {},
  });
});

// Function to handle updating a product request
const updateProduct = asyncHandlers(async (req, res) => {
  return res.status(200).json({
    message: "Update product",
    data: {},
  });
});

// Function to handle deleting a product request
const deleteProduct = asyncHandlers(async (req, res) => {
  return res.status(200).json({
    message: "Delete product",
    data: {},
  });
});

// Function to handle delete all products
const deleteAllProducts = asyncHandlers(async (req, res) => {
  return res.status(200).json({
    message: "Delete all products",
    data: {},
  });
});

export {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
};
