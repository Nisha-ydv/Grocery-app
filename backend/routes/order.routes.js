import express from "express";
import {authUser} from "../middlewares/authUser.js";
import { authSeller } from "../middlewares/authSeller.js";
import {
    getAllOrders,
    getUserOrders,
    placeOrderCOD,
} from "../controllers/order.controller.js";

const router=express.Router();

router.post("/Cod",authUser,placeOrderCOD);
router.get("/user",authUser,getUserOrders);
router.get("/seller",authSeller,getAllOrders);

export default router;