"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AccesSchema = new Schema({
    idUsuario: String,
    fechaAcceso: String
});
exports.accesModel = mongoose_1.default.model('Accesos', AccesSchema);
