const mongoose = require('mongoose');
const { Schema}= mongoose;

const PostulantSchema = new Schema({
    name: { type: String, required: true},
    apPatern: { type : String, required: true},
    apMatern: { type: String, required: true},
    edad: { type: Number, required: true},
    address: { type: String, required: true},
    genero: { type: String, required:true},
    telefono: {type:Number, required:true},
    email: {type:String, required:true},
    expLab: {type: String}

});

module.exports = mongoose.model('Postulant', PostulantSchema);