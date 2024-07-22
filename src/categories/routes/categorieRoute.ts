import express  from "express";
import { createCategorie,updateCategorie,getAllCustumer,getAllCustumerActive } from "../controllers/categoriesController";
import { validateToken } from "../../helpers/verificateToken";

export const categorieRoute = express.Router();
//Verifica el token todos las rutas que esten de bajo
categorieRoute.use(validateToken)

categorieRoute.post("/",createCategorie);
categorieRoute.patch("/:id",updateCategorie);
categorieRoute.get("/",getAllCustumer);
categorieRoute.get("/activate/",getAllCustumerActive);



