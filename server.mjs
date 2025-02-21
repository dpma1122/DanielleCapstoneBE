//imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.mjs";

// setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());

//DB connection
connectDB();

//routes

//listener
app.listen(PORT, () => {
  console.log("Server Running on PORT:${PORT}");
});
