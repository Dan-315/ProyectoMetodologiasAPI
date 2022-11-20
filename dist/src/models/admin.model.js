"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AdminSchema = new Schema({
    idGranja: String,
    nombre: String,
    apellido: String,
    usuario: String,
    password: String
});
exports.adminModel = mongoose_1.default.model('Administradores', AdminSchema);
