const express = require('express');
const router = express.Router();

const postulante =require ('../controller/postulant.controller');
//ruta q el servidor tendra disponible
router.get('/',postulante.getPostulants);
router.post('/', postulante.createPsotulant);
router.get('/:id',postulante.getPostulant);
router.put('/:id',postulante.editPostulant);
router.delete('/:id',postulante.deletePostulant);
module.exports = router;