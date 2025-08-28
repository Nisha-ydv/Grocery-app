import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,trim:true
    },
    description:{
        type:Array,
        required:true,
    },
    price:{
       type:Number,
       required:true,
    },
    offerPrice:{
        type:Number,
        required:true,
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    inStock:{
       type:Boolean,
       default:true,
       required:true, 
    }
});

const Product=mongoose.model("Product",productSchema);
export default Product;