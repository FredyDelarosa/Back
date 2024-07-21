import { CustumerRepository } from "../repository/customerRepository";
import { Customer } from "../models/customer";
import { encrypt } from "../../helpers/ashs";

export class CustumerService{
    public static async createCustomer(name:string,email:string,password:string,phone_number:string,created_by:string){
        try {
            //Encripta la contraseña
            password = await encrypt(password);
            
            return await CustumerRepository.createCustumer(name,email,password,phone_number,created_by);
        } catch (error:any) {
            throw new Error(`Error al crear cliente: ${error.message}`);
        }
    }
}