import { RegistroVendedor } from "../Dominio/RegistroVendedor";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import Vendedor from "./models/RegistroModel";

export class SqlRepositorio implements RegistroRepositorio{
    async crearRegistro(id_Vendedor: number): Promise<RegistroVendedor | null> {
        try {
            const registroCreado = await Vendedor.create({id_Vendedor});
            return new RegistroVendedor(registroCreado.id_Vendedor)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddVendedor", error);
            return null;
        }
    }
}