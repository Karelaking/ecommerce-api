import asyncHandler from "../controllers/asyncHandler.js";

// Function to handle add items to the cart list.
const addToCart = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Item added to the cart",
    cart: req.body,
  });
});

// Function to handle update items to the cart list
const updateToCart = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Item updated in the cart",
    cart: req.body,
  });
});

// Function to handle remove items from the cart list
const removeFromCart = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Item removed from the cart",
    cart: req.body,
  });
});

export { addToCart, updateToCart, removeFromCart };
