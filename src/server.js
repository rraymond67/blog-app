import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { initMongoServer } from "./db/connection.js";
import blog from "./routes/user.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";

initMongoServer();
const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;

// ============
// Middleware
// ============
app.use(express.json());
app.use("/api", blog);
app.use(cookieParser());
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));
app.use(logger("combined"));

// Server Connection Error and Success
db.on("error", error => console.log(error.message));
db.on("connected", () => console.log(`Mongo is connected`));
db.on("disconnected", () => console.log(`Mongo is disconnected`));

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
