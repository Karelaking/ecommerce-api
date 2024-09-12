import asyncHandler from "../utils/asyncHandler.js";

// Function to handle user registration request
const userRegister = asyncHandler(async (req, res) => {
  // Logic for user related operations
  return res.status(200).json({
    message: "User registered successfully",
  });
});

// Function to handle user login request
const userLogin = asyncHandler(async (req, res) => {
  // Logic for user related operations
  return res.status(200).json({
    message: "User logged in successfully",
  });
});

export { userRegister, userLogin };
