import { AddRegistroController } from "./controller/AgregarRegistro.Controller";
import { AddRegistroCasoUso } from "../Aplicacion/AgregarRegistroCasoUso";
import { NotificacionRegistroCasoUso } from "../Aplicacion/Services/NotificacionNuevoRegistro";
import { SqlRepositorio } from "./sqlVendedorRepositorio";
import { MensajeServiceSocket } from "./Helpers/ServiceMessage/MensageServiceSocket";
import { NotificacionAgregarRegistro } from "./Helpers/ServiceRabbitMQ/NotificacionAgregarRegistro";


export const sqlRepositorio = new SqlRepositorio();
export const notificacionAgregarRegistro = new NotificacionAgregarRegistro();
export const mensajeServiceSocket = new MensajeServiceSocket();

export const notificacionRegistroCasoUso = new NotificacionRegistroCasoUso(notificacionAgregarRegistro);

export const addRegistroCasoUso = new AddRegistroCasoUso(
    sqlRepositorio,
    notificacionRegistroCasoUso,
    mensajeServiceSocket
)
export const addRegistroController = new AddRegistroController(addRegistroCasoUso);

