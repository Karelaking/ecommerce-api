import databaseConnection from "./database/database_connection.js";
import { DB_NAME } from "./constants.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

// Connect to the database
databaseConnection(
  `mongodb+srv://karelaking277:mradulkumar1@ecommerce-api.qhkq9.mongodb.net/${DB_NAME}`
)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });
