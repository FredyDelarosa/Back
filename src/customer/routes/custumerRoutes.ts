import  express  from "express";
import { createCostumer } from "../controllers/customerControllers";

export const custumerRoute = express.Router();

custumerRoute.post('/',createCostumer )