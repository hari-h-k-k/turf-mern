const mongo=require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.MONGO_URI);

const connectDB = async () => {

    try {

        await mongo.connect(process.env.MONGO_URI);

        console.log('MongoDB connected');

    }

    catch (error) {

        console.error('Mongo connection failed:', error.message);

        process.exit(1);

    }

};

module.exports = connectDB;