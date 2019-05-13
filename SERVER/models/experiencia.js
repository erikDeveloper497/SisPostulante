const mongoose = require('mongoose');
const {Schema} = mongoose;

const postulant = mongoose.model('postulant');


const ExpSchema = new Schema({
    lugar: { type:String, required:true},
    cargo: { type:String, required:true},
    desc: { type: String, required:false},
    fechai: { type:Date, required:true},
    fechaf: {type:Date, required:true}

});