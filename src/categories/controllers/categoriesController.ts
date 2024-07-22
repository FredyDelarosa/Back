import { Request,Response } from "express";
import { CategoriaService } from "../services/categoriesService";

export const createCategorie = async(req:Request, res:Response) =>{
    try {
        const {name,descripcion,created_by} = req.body;
        console.log(name,descripcion,created_by)
        if (!name||!descripcion || !created_by) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const newCategoria = await CategoriaService.createCategorie(name,descripcion,created_by);

        res.status(201).json(newCategoria);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCategorie = async(req:Request, res:Response) =>{
    try {
        const {id} = req.params;
        const {name,descripcion,updated_by} = req.body;
        if (!id||!name||!descripcion || !updated_by) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const newCategoria = await CategoriaService.updateCategorie(id,name,descripcion,updated_by);

        res.status(201).json(newCategoria);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllCustumer = async(req:Request,res:Response) => {
    try {
        const AllCategorie = await CategoriaService.getAllCategories();
        res.status(200).json(AllCategorie);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllCustumerActive = async(req:Request,res:Response) => {
    try {
        const AllCategorieActive = await CategoriaService.getAllCategoriesActive();
        res.status(200).json(AllCategorieActive);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCategories = async(req:Request,res:Response) => {
    try {
        const {id} = req.params
        const deleteCategories = await CategoriaService.deleteCategories(id);
        res.status(200).json(deleteCategories);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCategoriesPermant = async(req:Request,res:Response) => {
    try {
        const {id} = req.params
        const deleteCategories = await CategoriaService.deleteCategoriesPermant(id);
        res.status(200).json(deleteCategories);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}
