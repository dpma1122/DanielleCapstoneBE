import mongoose from "mongoose";

//build model
const JournalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true
});
//export to a key model pair
const Journal = mongoose.model("Journal", JournalSchema);

export default Journal;
