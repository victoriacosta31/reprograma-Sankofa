const PsicologoModel = require('../models/psicologosModel')

const createPsicologo = async(req, res) =>{
    try{
        const { nome, telefone, estado, cidade, email} = req.body

        const newPsicologo = new PsicologoModel({
            nome, telefone, estado, cidade, email 
        })

        const savedPsicologo = await newPsicologo.save()

        res.status(201).json(savedPsicologo)
    
    } catch (error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const getAllPsicologos = async(req, res) => {
    try{
        const allPsicologos = await PsicologoModel.find()
        res.status(200).json(allPsicologos)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createPsicologo,
    getAllPsicologos
}