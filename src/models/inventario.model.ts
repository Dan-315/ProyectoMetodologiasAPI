import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    idModulo:String,
    concepto:String,
    minimo:Number,
    existencias:Number,
    solicitud:Number,
    fechaUpdate:String,
});

export const inventarioModel = mongoose.model('Inventario',InventarioSchema);