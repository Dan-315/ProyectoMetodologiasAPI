import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SuscripSchema = new Schema({
    id:String,
    idCurso:String,
    idUsuario:String,
    fechaCompra:String,
    MontoTotal:Number
});

export const suscripModel = mongoose.model('Suscripcion',SuscripSchema);