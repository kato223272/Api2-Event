import { RegistroVendedor } from "../RegistroVendedor"

export default interface InotificacionNuevoRegistro{
    mandarNotificacion(registroVendedor:RegistroVendedor): Promise<boolean>;
}