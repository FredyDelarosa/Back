import { Customer } from "../models/customer";
import { query } from "../../database/mysql";

export class CustumerRepository{
    public static async createCustumer(name:string,email:string,password:string,phone_number:string,created_by:string):Promise<Customer | any>{
        try {
            const sql = 'INSERT INTO Customer (name, email, password, phone_number ,created_by, updated_by) VALUES (?, ?, ?, ?, ?, ?)';
            const params = [name,email,password,phone_number,created_by,created_by];

            const [result]:any =await query(sql,params);
            
            // Verifica si el cliente fue creado exitosamente
            if (!result.insertId) {
                throw new Error('Failed to create cliente, no insertId returned');
            }
            
            // Obtén el ID del cliente creado
            const createdCustumerId = result.insertId;

            // Construye la entidad Customer completa
            const newCustumer: Customer = {
                id: createdCustumerId,
                name: name,
                email: email,
                password: password,
                phone_number: phone_number,
                created_at: new Date().toISOString(),
                created_by: created_by,
                updated_at: new Date().toISOString(),
                updated_by: created_by,
                deleted: false
            };

            return newCustumer;
            
        } catch (error:any) {
            throw new Error(`${error.message}`);
        }
    }
}