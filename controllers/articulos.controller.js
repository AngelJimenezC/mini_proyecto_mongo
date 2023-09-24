const { response, request} = require("express")

//Model - Schema
const articulos = require('../models/articulos.model')


//Read
const articulosGet = async(req = request, res = response) => {
  try {
    const queryParam = {state:true};
    const { limite = 10 } = req.query
    const NumeroEntradas = await articulos.countDocuments()
    const usuario = await articulos.find(queryParam).populate("service").limit(Number(limite));
    res.status(200).json({
      total: NumeroEntradas,
      usuario
    })
  } catch (error) {
    res.status(500).json({
      message:'Algo Ocurrio cuando buscabamos usuarios',
    })
  }
}


//Create
const articulosPost = async(req = request, res = response) => {

  try {
    const { nombre, precio, existencias,  state} = req.body
    const data ={nombre, precio, existencias,  state}

    const articulos = new articulos(data)
    await articulos.save()

    res.status(200).json({
      message:'Usuarios Route desde el controller -- POST',
      articulos
    })
    
  } catch (error) {
    res.status(500).json({
      message:'Error en el servidor',
      error
    })
  }
}

//Update
const articulosPut = async(req = request, res) => {

  try {
    const { id } = req.params;
    const { nombre, precio, existencias,  state } = req.body
    const data = {nombre, precio, existencias,  state}

    const articulos = await articulos.findByIdAndUpdate(id, data)
    res.status(200).json({
      message:'Usuarios Modificados con exito',
      ok:true
    })
    
  } catch (error) {
    res.status(500).json({
      message:"Algo salio mal cuando intentabamos actualizar el usuario"
    })
  }
}

//Delete
const articulosDel = async(req = request, res = response ) => {
  try {
    const {id} = req.params
    const falseState = {state: false}
    const articulos = await articulos.findByIdAndUpdate(id, falseState)
  
    res.status(200).json({
      message: ` El Usuario con el id: ${id} fue eliminado`,
      articulos
    })
    
    } catch (error) {
      res.status(500).json({
        message:"Algo salio mal cuando intentabamos eliminar el usuario"
    })
  }
}

module.exports = {
  articulosGet,
  articulosPost,
  articulosPut,
  articulosDel
}