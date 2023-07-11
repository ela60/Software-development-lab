const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const { errorResponse } = require('./controllers/responseController')
const dishRouter = require('./routers/dishRouter')
const leaderRouter = require('./routers/leaderRouter')
const promoRouter = require('./routers/promoRouter')

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/dishes", dishRouter)
app.use("/leaders", leaderRouter)
app.use("/promos",promoRouter)

// client error handlling
app.use((req, res, next)=>{
    res.status(404).json({message: `Route ${req.path} not found`})
    next()
})

// server error handlling
app.use((err, req, res, next)=>{
    console.error(err.stack)
    return errorResponse(
        res,
        {
            statusCode: err.status,
            message: err.message
        }
    )
})

module.exports = app;