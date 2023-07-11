const mongoose = require('mongoose')
const { MONGODB_URL } = require('../secret')

const dbConnect  = async (options = {}) =>{
    if(mongoose.connection.readyState >= 1){    
        console.log("database connected")
        return;
    }

    try {
        const { connection } = await mongoose.connect(MONGODB_URL, options)
        console.log("database connected successfully")

        mongoose.connection.on('error', (error)=>{
            console.error("DB Connection Error", error)
        })
    } catch (error) {
        console.error("DB Connection Error:: Can not connect database", error.toString())
        Promise.reject(error);
    }
}

module.exports = dbConnect
