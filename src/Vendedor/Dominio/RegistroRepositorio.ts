import { RegistroVendedor } from "./RegistroVendedor"

export interface RegistroRepositorio{
    crearRegistro(
        id_Vendedor:number
    ):Promise<RegistroVendedor | null>
}