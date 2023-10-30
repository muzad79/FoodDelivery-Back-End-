const mongoose = require('mongoose')

const SchemaTemplate ={

    CategoryName:String,
    name:String,
    img:String,
    options:[{String}],
    description:String

}
const FoodSchema =new mongoose.Schema(SchemaTemplate)
const FoodItems =mongoose.model("FoodItems",FoodSchema)

module.exports=FoodItems