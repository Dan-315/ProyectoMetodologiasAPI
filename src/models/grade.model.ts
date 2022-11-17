import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
    idInstructor:String,
    nombre:String,
    horario:[String],
    categorias:[String],
    descripcion:String,
    duracion:Number,
    costo:Number,
    cupo:Number
});

export const gradeModel = mongoose.model('Cursos',GradeSchema);