import { timeStamp } from 'console';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    idGranja:String,
    nombre:String,
    apellido:String,
    usuario:String,
    password:String
});

export const adminModel = mongoose.model('Administradores',AdminSchema); 