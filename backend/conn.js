const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Can't Connect to Database", error);
    }
}

connectToDatabase();