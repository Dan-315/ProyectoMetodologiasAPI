"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const GradeSchema = new Schema({
    idInstructor: String,
    nombre: String,
    horario: [String],
    categorias: [String],
    descripcion: String,
    duracion: Number,
    costo: Number,
    cupo: Number
});
exports.gradeModel = mongoose_1.default.model('Cursos', GradeSchema);
