import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

//connecting string variable
const db = process.env.mongoURI

   async function connectDB() {
      try {
          await mongoose.connect(db);
          console.log('Mongo DB Connected Successfully')
      } catch (error) {
          console.log(error) 
          process.exit (1)
        }
}
    
export default connectDB
