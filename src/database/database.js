const mongoose = require('mongoose')

function connectToDatabase() {
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("database connected")
    }).catch((error) => {
        return console.log(`something went wrong error: ${error}`)
    });

}

module.exports = connectToDatabase