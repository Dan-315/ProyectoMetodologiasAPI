import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GranjaSchema = new Schema({
    nombre:String,
    fechaAdd:String,
    activa:Boolean,
});

export const granjaModel = mongoose.model('Granja',GranjaSchema);