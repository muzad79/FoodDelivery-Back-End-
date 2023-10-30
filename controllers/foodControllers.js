const mongoose=require('mongoose')

async function getFoodItems(req,res){ 
    try{ 
    const fetchedFoodData =  mongoose.connection.db.collection("FoodItems")
    let foodData = await fetchedFoodData.find().toArray()
    const fetchedCategoryData =mongoose.connection.db.collection("FoodCategory")
    let foodCategory = await fetchedCategoryData.find().toArray()
    
        res.status(200).json({foodData:foodData,
        foodCategory:foodCategory})

    }
    catch(err){
        console.log(err)
    }

}

module.exports= {getFoodItems}