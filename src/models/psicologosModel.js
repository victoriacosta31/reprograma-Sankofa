const mongoose = require('mongoose')

const psicologoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome:{
        type: String, 
        required: true, 
        unique:true,
    },

    telefone:{
        type: Number
    }
    ,

    estado:{
        type: String,
        required: true
    },

    cidade:{
        type: String,
        required: true
    },

    email:{
        type: String,
        default: "Não informado"
    },
   
}, {timestamps: true })

const Model = mongoose.model('psicologo', psicologoSchema)

module.exports = Model
