require('dotenv').config()
const express = require('express')
const mongoose = require('../src/database/mongooseConnect')
const psicologosRoutes = require('../src/routes/psicologosRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const cors = require('cors')
const index = require('../src/routes/index')


//executar o express
const app = express()

//bodyparser
app.use(express.json())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors())
app.use("/", index);

mongoose.connect()

app.use("/sankofa", psicologosRoutes)

module.exports = app