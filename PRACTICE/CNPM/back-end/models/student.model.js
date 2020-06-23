const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    age: {
        type: Number,
        requied: true
    },
    createdTime: {
        type: String,
        required: true
    }
});

const Student = module.exports = mongoose.model('Student', studentSchema)