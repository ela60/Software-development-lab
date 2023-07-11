const {SERVER_PORT} = require("./secret")
const app = require('./app');
const dbConnect = require("./config/dbConfig");

app.listen(SERVER_PORT, async () => {
    console.log(`server is running ... on port, http://127.0.0.1:${SERVER_PORT}`);
    await dbConnect()
})