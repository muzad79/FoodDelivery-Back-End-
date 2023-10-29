const mongoose = require('mongoose')

const SchemaTemplate ={

    email:{
        type:String,
        required:true,
        unique:true
    },
    orders:{
        type:Array,
        required:true

    }

}
const OrderSchema =new mongoose.Schema(SchemaTemplate)
const OrderModel =mongoose.model("Orders",OrderSchema)

module.exports=OrderModel