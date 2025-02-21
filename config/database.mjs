import mongoose from "mongoose";


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
