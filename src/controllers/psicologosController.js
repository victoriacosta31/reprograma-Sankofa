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

const findPsicologoById = async (req, res) =>{
    try{
        const findPsicologo = await PsicologoModel.findById(req.params.id)
        res.status(200).json(findPsicologo)
    } catch (error){
        console.error(error)
        res.status(500).json({ message:error.message})
    }
}

const findPsicologoByEstado = async (req, res) =>{
    try{
      const { estado } = req.query;
      const findEstado = await PsicologoModel.find({ estado: estado});
      res.status(200).json(findEstado)
    } catch (err) {
      res.status(500).send({ message: err.message})    
    }
}

const findPsicologoByCidade = async (req, res) =>{
    try{
      const { cidade }  = req.query;
      const findCidade = await PsicologoModel.find({ cidade: cidade});
      res.status(200).json(findCidade)
    } catch (err){
      res.status(500).send({ message: err.message})  
    }
}

const updatePsicologo = async (req, res) => {
    try{
        const {nome, telefone, estado, cidade, email} = req.body;
        const updatedPsicologo = await PsicologoModel.findByIdAndUpdate(req.params.id, {
            nome, telefone, estado, cidade, email
        })
        const psicologoUpdated = await PsicologoModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(psicologoUpdated)
        } catch (error){
        console.error(error)
        res.status(500).json({ message: error.message})    
        }
    }

const deletePsicologo = async (req, res) => {
    try{
        const { id } = req.params
        await PsicologoModel.findByIdAndDelete(id)
        const message = `O Psicologo com a id ${id} foi deletado`
        res.status(200).json({ message })
    } catch(error){
        console.error(error)
        res.status(500).json({ message:error.message})
    }
}    


module.exports = {
    createPsicologo,
    getAllPsicologos,
    findPsicologoById,
    findPsicologoByEstado,
    findPsicologoByCidade,
    updatePsicologo,
    deletePsicologo
}