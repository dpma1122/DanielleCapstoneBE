import mongoose from 'mongoose'; 


//build model
const JournalSchema = new mongoose.Schema()

//export to a key model pair
const Journal = mongoose.model('Journal', JournalSchema)

export default Journal; 