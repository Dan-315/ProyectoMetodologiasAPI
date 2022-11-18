"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ModuloSchema = new Schema({
    idGranja: String,
    nombre: String,
    fechaAdd: String,
});
exports.moduloModel = mongoose_1.default.model('Modulo', ModuloSchema);
