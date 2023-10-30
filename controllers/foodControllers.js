const mongoose=require('mongoose')
const FoodModel = require('../models/FoodItems')
const FoodCategoryModel = require('../models/FoodCategory')

async function getFoodItems(req,res){ 
    try{ 
    
    let foodData = await FoodModel.find()
    let foodCategory = await FoodCategoryModel.find()
    
        res.status(200).json({foodData:foodData,
        foodCategory:foodCategory})

    }
    catch(err){
        console.log(err)
    }

}

module.exports= {getFoodItems}