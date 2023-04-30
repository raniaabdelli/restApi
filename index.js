//4.	Lunch a server with express in the server.js file
const express= require('express')
const app = express()
const dotenv=require('dotenv')

dotenv.config()
const port=process.env.Port||8081

const mongoose=require('mongoose')
app.use(express.json())

//5.	Connect your database locally or with mongo atlas
mongoose.connect(process.env.mongo_uri).then(()=>console.log("database connected"))
app.use("/api",require('./routes/contactRoutes'))
app.listen(port,()=>console.log("listening on port: ",port))
