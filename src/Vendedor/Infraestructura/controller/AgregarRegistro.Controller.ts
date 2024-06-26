import { Request, Response } from "express";
import { AddRegistroCasoUso } from "../../Aplicacion/AgregarRegistroCasoUso";

export class AddRegistroController{
    constructor(readonly addRegistroCasoUso:AddRegistroCasoUso){}

    async run(req:Request, res:Response){
        const data = req.body;
        const id = Number(data.id);
        console.log("Error en el archivo controller", id);


        try {
            const registroVendedor = await this.addRegistroCasoUso.run(
                id
            );

            if(registroVendedor){
                res.status(201).send({
                    status:"success",
                    data:{
                        id_Vendedor:registroVendedor?.id_Vendedor
                    }
                });
            }else{
                res.status(204).send({
                    status:"error",
                    data:"Vendor no agregado"
                })
            }
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"Ha ocurrido un error",
                message:error
            })
        }
        
    }
}