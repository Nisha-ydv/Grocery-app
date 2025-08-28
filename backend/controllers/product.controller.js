import Product from "../models/product.model.js";
// add product:/ api/product/add-product
export const addProduct=async(req,res)=>{
   try {
     const {name, description, price, offerPrice, category}=req.body;
     const image=req.files?.map((file)=>file.filename);
     console.log("product data",req.body);
     console.log("uploaded files",req.files);
     if(
      !name||
      !price||
      !offerPrice||
      !description||
      !category||
      !image||
      image.length===0
     ){
      return res.status(400).json({
         success:false,
         message:"All fiels including images are required",
      });
     }
     const newProduct=new Product({
        name,
        description,
        price,
        offerPrice,
        category,
        image,
     })
     const savedProduct = await newProduct.save();

    return res.status(201).json({
      success: true,
      product: savedProduct,
      message: "Product added successfully",
    });
   } catch (error) {
    console.error("Error in add product", error);
    return res.status(500)
    .json({success:false,message:"Server error while adding product"});
   } 

   
}
// get products:/api/product/get
export const getProducts=async(req,res)=>{
   try {
    const products= await Product.find({});
    res.status(200).json({products,success:true});
   } catch (error) {
    res.status(500).json({message:"server error",error:message})
   } 
}

// get single product :/api/product/id
export const getProductById=async(req,res)=>{
    try {
       const {id}=req.body; 
       const product=await Product.findById(id);
       
       res.status(200).json({product,success:true});
    } catch (error) {
       res.status(500).json({message:"Server error",error:error.message}) 
    }
}

// change stock :api/product/stock
export const changeStock=async(req,res)=>{
    try {
        const {id,inStock}=req.body;
        const product=await Product.findByIdAndUpdate(id,
            {inStock},
            {new:true}
        );
        res.status(200)
        .json({success:true,product,message:"Stock updated successfully"});
    } catch (error) {
       res.status(500)
       .json({
        message:"server error",
        error:error.message
       }) 
    }
}