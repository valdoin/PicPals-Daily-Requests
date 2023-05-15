const Mongoose = require('mongoose')

const PhraseSchema = new Mongoose.Schema({
    phrase: {
        type: String,
        required: true,
    },
    date: { type: Date, default: Date.now },
})


const Phrase = Mongoose.model("Phrase", PhraseSchema)
module.exports = Phrase