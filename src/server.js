require("./db/connection")
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const helloRouter = require('./routes')
const { appendFile } = require("fs")

app.use(express.json())
app.use(cors())
// app.use(userRouter)
app.use(helloRouter)

app.listen(5000, () => {
    console.log("listening on port 5000")
})