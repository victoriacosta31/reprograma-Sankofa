require('dotenv').config()
const express = require('express')
const mongoose = require('../src/database/mongooseConnect')
const psicologosRoutes = require('../src/routes/psicologosRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const cors = require('cors')


//executar o express
const app = express()

//bodyparser
app.use(express.json())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors())

mongoose.connect()

app.use(psicologosRoutes)

module.exports = app