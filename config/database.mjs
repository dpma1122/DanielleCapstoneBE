import mongoose from "mongoose";


//connecting string variable
const db = process.env.mongoURI

  export default async function connectDB() {
      try {
      } catch (error) {
          console.log(error) 
          process.exit (1)
        }
    }
