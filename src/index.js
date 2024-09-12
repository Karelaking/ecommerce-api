import { configDotenv } from "dotenv";
import databaseConnection from "./database/database_connection.js";
import { DB_NAME } from "./constants.js";
import app from "./app.js";
import asyncHandler from "./utils/asyncHandler.js";

// Load environment variables from .env file
configDotenv({
  path: "./.env",
});

// Assign environment variables to constant variables
const PORT = process.env.PORT || 8000;
const MONGODB_DATABASE_URL = process.env.MONGODB_DATABASE_URL

// Connect to the database
databaseConnection(
  `${MONGODB_DATABASE_URL}/${DB_NAME}`
)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });

// const data = asyncHandler(databaseConnection(`${MONGODB_DATABASE_URL}/${DB_NAME}`))
// console.log(data);

