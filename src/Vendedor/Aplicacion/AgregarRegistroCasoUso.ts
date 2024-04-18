import { RegistroVendedor } from "../Dominio/RegistroVendedor";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import { NotificacionRegistroCasoUso } from "./Services/NotificacionNuevoRegistro";
import { MensajeServiceSocket } from "../Infraestructura/Helpers/ServiceMessage/MensageServiceSocket";

export class AddRegistroCasoUso{
    constructor(
        readonly registroRepositorio:RegistroRepositorio, 
        readonly notificacionRegistroCasoUso:NotificacionRegistroCasoUso,
        readonly mensajeServiceSocket:MensajeServiceSocket
    ){}

    async run(id_Vendedor:number):Promise<RegistroVendedor | null>{
        try {
            console.log("log en el useCase", id_Vendedor);
            
            const registroVendedor:any = await this.registroRepositorio.crearRegistro(
                id_Vendedor
            ); 
            if(registroVendedor){
                this.notificacionRegistroCasoUso.run(registroVendedor);
                this.mensajeServiceSocket.enviarMensaje(registroVendedor);
            }
            return registroVendedor;
        } catch (error) {
            console.log("Error en addRegistroCasoUso", error);
            return null;
        }
    }
}