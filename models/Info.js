const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    birthDate: {
        type: Date,
        required: true

    },
    students: {
        type: Number,
        required: true

    },
    coverImageName: {
        type: String,
        required: true

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    


})

module.exports = mongoose.model('Info', infoSchema)