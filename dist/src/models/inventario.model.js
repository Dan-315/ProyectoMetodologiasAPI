"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventarioModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const InventarioSchema = new Schema({
    idModulo: String,
    concepto: String,
    minimo: Number,
    existencias: Number,
    solicitud: Number,
    fechaUpdate: String,
});
exports.inventarioModel = mongoose_1.default.model('Inventario', InventarioSchema);
