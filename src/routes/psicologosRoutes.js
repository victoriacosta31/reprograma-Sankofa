const controller = require('../controllers/psicologosController')
const express = require('express')

const router = express.Router()

router.post("/psicologo", controller.createPsicologo)
router.get("/psicologos", controller.getAllPsicologos)
router.get("/psicologos/:id", controller.findPsicologoById)
router.get("/psicologo/estado", controller.findPsicologoByEstado)
router.get("/psicologo/cidade", controller.findPsicologoByCidade)
router.patch("/psicologo/:id", controller.updatePsicologo)
router.delete("/psicologo/:id", controller.deletePsicologo)

module.exports = router