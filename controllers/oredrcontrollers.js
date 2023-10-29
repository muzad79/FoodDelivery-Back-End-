const Orders = require('../models/Orders')


async function createOrders(req, res) {

    const { email, orders ,date} = req.body;
    let obj ={date:date,
    item:orders}
    let orderData=[]
    orderData.push(obj)
    console.log(orders)
    try {
        const existingOrders = await Orders.findOne({ email })
        if (!existingOrders) {
            let ordersCart = await Orders.create({
                email: email,
                orders: orderData
            })
            if (ordersCart) {
                res.status(200).json({ message: "order placed successfully" })
                return
            }
        }
       let newOrder= await Orders.findOne({ email })
       if(newOrder){
        newOrder.orders.push(obj)
        newOrder.save();
        res.status(200).json({ message: "order placed successfully" })
       }
      

            

    }

    catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }

}

async function getOrders(req,res){
    console.log("getOrdershit")
    const {email} = req.body
    try{
        const existingOrders =await Orders.findOne({email})
        if(!existingOrders){
            res.status(400).json({message:"no Data"})
            return
        }
        res.status(200).json({data:existingOrders})

    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err})
    }
}

module.exports = { createOrders ,getOrders}