import { Request, Response } from "express";
import { CustumerService } from "../services/customerService";

export const createCostumer = async (req:Request, res:Response) =>{
    try {
        const {name,email,password,phone_number,created_by} = req.body

        if (!name || !email || !password || !phone_number ||!created_by ) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const newCustumer = await CustumerService.createCustomer(name,email,password,phone_number,created_by);

        res.status(201).json(newCustumer);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

