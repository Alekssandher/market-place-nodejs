const mongoose = require('mongoose')
require('dotenv').config();
const { URLDATABASE } = process.env;

function connectToDatabase() {
    console.log("URLDATABASE: ", URLDATABASE)
    mongoose.connect(URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("database connected")
    }).catch((error) => {
        return console.log(`something went wrong error: ${error}`)
    });

}

module.exports = connectToDatabase