import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { JSON_LIMIT, STATIC_ASSETS_URL, URL_PREFIX } from "./constants.js";

const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Initialize the express application
const app = express();

// apply cors middleware
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

// apply json middleware
app.use(
  express.json({
    limit: JSON_LIMIT,
  })
);

// apply urlencoded middleware
app.use(
  express.urlencoded({
    extended: true,
    limit: JSON_LIMIT,
  })
);

// apply cookie-parser middleware
app.use(cookieParser());

// apply static assets middleware
app.use(express.static(STATIC_ASSETS_URL));

// import routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import productsRouter from "./routes/products.routes.js";
import ordersRouter from "./routes/orders.routes.js";
import cartRouter from "./routes/cart.routes.js";

// apply routes
app.use(`${URL_PREFIX}/auth`, authRouter);
app.use(`${URL_PREFIX}/users`, userRouter);
app.use(`${URL_PREFIX}/products`, productsRouter);
app.use(`${URL_PREFIX}/orders`, ordersRouter);
app.use(`${URL_PREFIX}/cart`, cartRouter);

export default app;
