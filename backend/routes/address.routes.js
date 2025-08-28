import express from "express";
import {authUser} from "../middlewares/authUser.js";
import { addAddres, getAddress } from "../controllers/address.controller.js";

const router=express.Router();

router.post("/add",authUser,addAddres);
router.get("/get",authUser,getAddress);

export default router;