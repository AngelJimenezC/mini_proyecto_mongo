const express = require('express');
const cors = require('cors');

const {dataBaseConnection} = require('')


class Server {

    constructor(){
      this.app = express();
      this.port = process.env.PORT || 3001
      this.usersPath = '/articulo'
  
      this.dataBaseConnection()
  
      this.middlewares()
      this.routes()
    }
  
    async dataBaseConnection(){
      await dataBaseConnection()
    }
  
    middlewares(){
      this.app.use(cors());
      this.app.use(express.json())
    }
  
    routes(){
      this.app.use(this.usersPath, require('../routes/articulos.routes'))
    }
  
    listen(){
      this.app.listen(this.port, ()=>{
        console.log(`Escuchando en el puerto ${this.port}`)
      })
    }
  
  }
  module.exports = Server;