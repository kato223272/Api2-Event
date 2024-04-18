import amqplib from 'amqplib';
import { RegistroVendedor } from '../../../Dominio/RegistroVendedor';
import InotificacionNuevoRegistro from '../../../Dominio/services/InotiicacionNuevoRegistro';

export class NotificacionAgregarRegistro implements InotificacionNuevoRegistro{
    private url:any;
    private exch: any;

    constructor(){
        this.url=process.env.AMQP_URL_EC2;
        this.exch=process.env.EXCHANGE_EC2;
    }

    async mandarNotificacion(registroVendedor: RegistroVendedor): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const ch = await conn.createChannel();
        const status = await ch.publish(this.exch, "kato", Buffer.from("Pago realizado"));
        return status;     
    }
} 