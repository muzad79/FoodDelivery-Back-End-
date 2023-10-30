const mongoose = require('mongoose')

const SchemaTemplate ={

    
    CategoryName:String,
    

}
const FoodCategorySchema =new mongoose.Schema(SchemaTemplate)
const FoodCategoryModel =mongoose.model("FoodCategory",FoodCategorySchema)

module.exports=FoodCategoryModel