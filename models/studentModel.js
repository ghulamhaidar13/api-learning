const mongoose = require('mongoose');

//create schema for student
const studentSchema = new mongoose.Schema({
    rollNo: {
        type: Number,
        unique: [true, 'Roll Number should be unique']
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        default: '-'
    },
    dob: {
        type: Date,
        max: [new Date(), 'Date of birth is greater than current date']
    }
});
const Student = mongoose.model('Student', studentSchema, 'Students');
module.exports = Student;