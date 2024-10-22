const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/my_database')
        console.log('OK!')
    } catch (e) {
        console.log('False!', e)
    }
}

module.exports = {connect}