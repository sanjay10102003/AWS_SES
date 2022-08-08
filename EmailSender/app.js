const express = require('express')
const app = express()
const sendEmail = require('./ses.js')
const createTemplate = require('./CreateTemplate')
const deleteTemplate = require('./DeleteTemplate')
const port = 3000

app.get("/create",(req,res)=>{
    createTemplate()
    res.send("Template Created")
})
app.get("/send",(req,res)=>{
    sendEmail()
    res.send("Email sent")
})
app.get("/delete",(req,res)=>{
    deleteTemplate()
    res.send("Template Deleted")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})