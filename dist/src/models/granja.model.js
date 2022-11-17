"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.granjaModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const GranjaSchema = new Schema({
    nombre: String,
    fechaAdd: String,
    activa: Boolean,
});
exports.granjaModel = mongoose_1.default.model('Granja', GranjaSchema);
