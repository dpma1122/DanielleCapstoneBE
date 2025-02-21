//imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.mjs";
import journalRoutes from './routes/journalRoute.mjs'
// setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());

//DB connection
connectDB();

//routes
app.use('/journal', journalRoutes)


//listener
app.listen(PORT, () => {
  console.log("Server Running on PORT:${PORT}");
});
