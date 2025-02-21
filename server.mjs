//imports
import express from 'express'; 
import dotenv from 'dotenv'

// setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000; 
//middleware
 app.use(express.json())

//routes


//listener
app.listen(PORT, () => {
    console.log('Server Running on PORT:${PORT}')
})