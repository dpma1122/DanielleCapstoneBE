import mongoose from 'mongoose'; 


//build model
const JournalSchema = new mongoose.Schema({
    journal: {
        title: String,
        type: String, 
        createAt: { type: Date, default: Date.now }, 
        required: true
    }
})

//export to a key model pair
const Journal = mongoose.model('Journal', JournalSchema)

export default Journal; 