import express from 'express'; 

//setup routes

//method to seperate routes
 const router = express.Router()


//test a route
// router.get('/', (req, res) => {
//     res.send('Journal routes')
// })

//create
router.post('/', (req, res) => {
    try {

    } catch (error) {
            console.log(error); 
            res.status(500).json({msg: 'Server Error'})
        }
    
})





//read
router.get('/', (req, res) => {
        try {
        
    } catch (error) {
            console.log(error); 
            res.status(500).json({msg: 'Server Error'})
        }
    
})







//update

router.put('/', (req, res) => {
    
    try {
        
    } catch (error) {
            console.log(error); 
            res.status(500).json({msg: 'Server Error'})
        }
    
})

//delete
router.delete('/', (req, res) => {
    
    try {
        
    } catch (error) {
            console.log(error); 
            res.status(500).json({msg: 'Server Error'})
        }
    
})





export default router