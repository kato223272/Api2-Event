import express from 'express';
import { addRegistroController } from './Dependencies';


export const vendedorRouter = express.Router();

vendedorRouter.post('/', addRegistroController.run.bind(addRegistroController))