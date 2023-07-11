require('dotenv').config()

const SERVER_PORT = process.env.SERVER_PORT || 3002
const MONGODB_URL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ela"
module.exports = {SERVER_PORT, MONGODB_URL}