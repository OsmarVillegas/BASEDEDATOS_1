import { Router } from "express";
import * as proyectCtrl from "../controllers/Proyectos.controllers";

const router= Router();


router.post('/',proyectCtrl.createProyecto);

router.get('/', proyectCtrl.findAllProyectos);

router.get('/:id',proyectCtrl.findOneProyecto);

router.delete('/:id',proyectCtrl.deleteProyecto);

router.put('/:id',proyectCtrl.updateProyecto);



export default router;