const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then(con => {
        console.log('DB_URI:', process.env.DB_URI);
        console.log(`mongoDB is connected to the host: ${con.connection.host}`)
    }).catch((err) => {
        console.log("Error found " + err);
    })
}

module.exports = connectDatabase;