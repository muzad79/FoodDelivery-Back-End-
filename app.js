const express= require('express');
const app= express();
const mongoose=require('mongoose')
const userRoute= require("./Routes/UserRoutes")
const orderRoutes =require('./Routes/OrderRoutes')
const foodRoute =require('./Routes/FoodRoutes')
const dotenv = require('dotenv')
dotenv.config()
const cors =require('cors')
app.use(cors({
     origin: '*',
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200
}))
require('./prod')(app)

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
     origin: '*'
}))
 mongoose.connect(process.env.MONGO_URL || "")

   
    

app.use('/user',userRoute)
app.use('/',foodRoute)
app.use('/orders',orderRoutes)



app.listen(process.env.PORT,()=>{
     console.log("server is running at http://localhost:3000")
})