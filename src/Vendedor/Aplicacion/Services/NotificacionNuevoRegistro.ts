import { RegistroVendedor } from "../../Dominio/RegistroVendedor";
import { NotificacionAgregarRegistro } from "../../Infraestructura/Helpers/ServiceRabbitMQ/NotificacionAgregarRegistro";


export class NotificacionRegistroCasoUso{
    constructor(readonly serviceNotification:NotificacionAgregarRegistro){}

    async run(registroVendedor:RegistroVendedor){
        await this.serviceNotification.mandarNotificacion(registroVendedor);
    }
}