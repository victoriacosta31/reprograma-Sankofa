const controller = require('../controllers/psicologosController')
const express = require('express')

const router = express.Router()

router.post("/psicologo", controller.createPsicologo)
router.get("/psicologos", controller.getAllPsicologos)
module.exports = router