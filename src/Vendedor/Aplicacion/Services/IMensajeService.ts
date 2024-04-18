import { RegistroVendedor } from "../../Dominio/RegistroVendedor";

export interface ImensajeService{
    enviarMensaje(registroVendedor:RegistroVendedor):string;
}