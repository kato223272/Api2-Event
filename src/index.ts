import express from "express";
import {Signale} from "signale";
import {vendedorRouter} from "./Vendedor/Infraestructura/VendedorRoutes";
import {InicializarBaseDatos} from "./Conexion/Base";
import cors from "cors"

const options ={
    secrets:["([0-9]{4}-?)+"]
}


const example = express();
example.disable("x-powered-by");

const logger = new Signale(options);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/mensaje", vendedorRouter)

async function iniciarServidor(){
    try {
        await InicializarBaseDatos();
        app.listen(3000, ()=>{
            logger.success("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        logger.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();