const mongoose=require('mongoose')

async function getFoodItems(req,res){  
    const fetchedFoodData =  mongoose.connection.db.collection("FoodItems")
    let foodData = await fetchedFoodData.find().toArray()
    const fetchedCategoryData =mongoose.connection.db.collection("FoodCategory")
    let foodCategory = await fetchedCategoryData.find().toArray()
    try{
        res.status(200).json({foodData:foodData,
        foodCategory:foodCategory})

    }
    catch(err){
        console.log(err)
    }

}

module.exports= {getFoodItems}