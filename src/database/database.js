const mongoose = require('mongoose')

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/market-place', {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("database connected")
    }).catch((error) => {
        return console.log(`something went wrong error: ${error}`)
    });

}

module.exports = connectToDatabase