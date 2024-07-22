import { CategorieRepository } from "../repository/categoriesRepository";

export class CategoriaService{

    public static async createCategorie(name:string,descripcion:string,created_by:string){
        try {
    
            return await CategorieRepository.createCategorie(name,descripcion,created_by);

        } catch (error:any) {
            throw new Error(`Error al crear categorie: ${error.message}`);
        }
    }

    public static async updateCategorie(id:string,name:string,descripcion:string,updated_by:string){
        try {
    
            return await CategorieRepository.updateCategorie(id,name,descripcion,updated_by);

        } catch (error:any) {
            throw new Error(`Error al crear categorie: ${error.message}`);
        }
    }

    public static async getAllCategories(){
        try {
            return await CategorieRepository.getAllCategories();

        } catch (error:any) {
            throw new Error(`Error al crear categorie: ${error.message}`);
        }
    }

    public static async getAllCategoriesActive(){
        try {
            return await CategorieRepository.getAllCategoriesActive();

        } catch (error:any) {
            throw new Error(`Error al crear categorie: ${error.message}`);
        }
    }
}