import { Router } from "express";
import { borrarReceta, agregarReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/productos.controllers";
import { check } from "express-validator";
const router = Router();
router.route("/recetas").get(listarRecetas).post(agregarReceta);
router.route("/recetas/:id").get(obtenerReceta).put(editarReceta).delete(borrarReceta);
