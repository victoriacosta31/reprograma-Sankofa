const controller = require('../controllers/psicologosController')
const express = require('express')

const router = express.Router()

router.post("/psicologo", controller.createPsicologo)
router.get("/psicologos", controller.getAllPsicologos)
router.get("/psicologos/:id", controller.findPsicologoById)
router.get("/psicologo/estado", controller.findPsicologoByEstado)

module.exports = router