const express= require('express');
const app= express();
const mongoose=require('mongoose')
const userRoute= require("./Routes/UserRoutes")
const orderRoutes =require('./Routes/OrderRoutes')
const foodRoute =require('./Routes/FoodRoutes')
const dotenv = require('dotenv')
require('./prod')(app)
const cors =require('cors')
dotenv.config()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
 mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

   
    

app.use('/user',userRoute)
app.use('/',foodRoute)
app.use('/orders',orderRoutes)


app.listen(process.env.PORT,()=>{
     console.log("server is running at http://localhost:3000")
})