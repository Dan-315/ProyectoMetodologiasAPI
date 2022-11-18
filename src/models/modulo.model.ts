import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ModuloSchema = new Schema({
    idGranja:String,
    nombre:String,
    fechaAdd:String,
});

export const moduloModel = mongoose.model('Modulo',ModuloSchema);