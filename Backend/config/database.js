const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB connected with HOST: ${con.connection.host}`);
    }).catch(err => {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);  // Exit the process with failure
    });
};


module.exports = connectDatabase;