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
    res.json(allJournals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//update

//should return the updated changes to the journal entry
router.put("/:id", async (req, res) => {
  try {
    let updateJournal = await journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(updateJournal)
    res.status(200).json(updateJournal)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await journal.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Journal Entry Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
