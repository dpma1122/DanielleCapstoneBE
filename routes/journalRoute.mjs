import express from "express";
import journal from "../models/Journal.mjs";
//setup routes
 
//method to seperate routes
const router = express.Router();

//test a route
// router.get('/', (req, res) => {
//     res.send('Journal routes')
// })

//create
router.post("/", async (req, res) => {
  try {
    let newJournal = await journal.create(req.body);
    res.json(newJournal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//read
router.get("/", async (req, res) => {
    try {
        let allJournals = await journal.find({}); 
        res.json(allJournals)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//update

router.put("/", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//delete
router.delete("/", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
