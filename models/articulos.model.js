const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  nombre:{
    type:String,
    required: [true, " El email es requerido"]
  },
    precio:{
    type:Number
  },
  existencias:{
    type: String,
    required: [true, " El Password es requerido"]
  },
  state:{
    type: Boolean,
    default: true
  },
})

module.exports = model('User', UserSchema)