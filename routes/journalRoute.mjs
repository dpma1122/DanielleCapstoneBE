import express from 'express'; 

//setup routes

//method to seperate routes
 const router = express.Router()


//test a route

router.get('/', (req, res) => {
    res.send('Journal routes')
})




export default router