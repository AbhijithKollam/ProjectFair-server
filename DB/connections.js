// import mongoose
const mongoose = require('mongoose')

// get connection string from .env file
const connectionString = process.env.DATABASE;

// Connect mongoDB
mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDb connected successfully");
}).catch((err)=>{
    console.log(`MongoDB connect failed due to ${err}`);
})