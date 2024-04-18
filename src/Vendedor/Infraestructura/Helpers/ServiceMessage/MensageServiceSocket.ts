import io from "socket.io-client";
import { RegistroVendedor } from "../../../Dominio/RegistroVendedor";
import { ImensajeService } from "../../../Aplicacion/Services/IMensajeService";

export class MensajeServiceSocket implements ImensajeService{
    enviarMensaje(registro: RegistroVendedor): string {
        const socket = io("http://localhost:3002/");

        socket.on("connect", ()=>{
            console.log("exito al Conectar al servidor socket");
            
            socket.emit("nuevo vendedor", "Pago Realizado");
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });

        return "Mensaje enviado";
    }
}