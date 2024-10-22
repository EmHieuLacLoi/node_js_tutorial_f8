const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, default: ''},
    des: { type: String, maxLength: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Course', Course)
