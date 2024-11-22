const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://dheeraj-chaubey231211:MKL@EJ7kz72Spdi@cluster0.8gw7g8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const databaseConnect = () => {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
        .catch((err) => console.log(err.message));
}

module.exports = databaseConnect;




