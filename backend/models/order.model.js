import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
 userId:{type:String,required:true, ref:'User'},
 items:[{
    product:{
        type:String, required:true,ref:"Product"
    },
    Quantity:{type:Number, required:true},
 }],
 amount:{type:Number, required:true},
 address:{type:String,required:true,ref:"Address"},
 status:{type:String,default:"order Placed"},
 paymentType:{type:String,required:true},
 isPaid:{type:Boolean, required:true,default:false},
},{timestamps:true});

const Order=mongoose.model("Order",orderSchema);
export default Order;