const express = require("express")
const helmet = require("helmet")
const smurfsRouter = require("./smurfs/smurf-router")

const server = express()

server.use(helmet())
server.use(express.json())

server.use("/smurfs", smurfsRouter)

server.get("/", (req, res) => {
    res.json({
        message: "Welcome to Smurfville"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong in Smurfville"
    })
})

module.exports = server