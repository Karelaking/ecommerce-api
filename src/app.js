import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { JSON_LIMIT, STATIC_ASSETS_URL } from "./constants.js";

const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Initialize the express application with cors, json, urlencoded and cookieparsers middleware.
const app = express();
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: JSON_LIMIT,
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: JSON_LIMIT,
  })
);

app.use(cookieParser());

app.use(express.static(STATIC_ASSETS_URL));

export default app;
