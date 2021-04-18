const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const uri = process.env.MONGODB_URI
console.log('connecting to', uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, required: true, unique: true },
    number: { type: String, minLength: 8, required: true},
})
personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj._id
        delete obj.__v
    }
})

module.exports = mongoose.model('Person', personSchema)