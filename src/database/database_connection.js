import mongoose from "mongoose";

const databaseConnection = async (databaseUrl) => {
  try {
    const dbConnection = await mongoose.connect(databaseUrl);
    console.log(
      "Database connected successfully :: databaseConnection ::",
      dbConnection.connection.host
    );
  } catch (error) {
    console.error("Database connection error :: databaseConnection ::", error);
    process.exit(1);
  }
};

export default databaseConnection;
