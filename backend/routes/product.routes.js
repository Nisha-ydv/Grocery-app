import express from "express";
import multer from "multer";
import { upload } from "../config/multer.js";
import { authSeller } from "../middlewares/authSeller.js";
import {
    getProductById,
    addProduct,
    changeStock,
    getProducts
} from "../controllers/product.controller.js"



const router=express.Router();
router.post('/add-product',authSeller, upload.array('image',4),addProduct);
router.get('/list',getProducts);
router.get('/id',getProductById);

router.post('/stock',authSeller, changeStock);


export default router;