import  express  from "express";
import { createAdmin } from "../controller/ADMINControllers";
import { validateToken } from "../../helpers/verificateToken";

export const adminRoute = express.Router();

adminRoute.post('/',createAdmin );


