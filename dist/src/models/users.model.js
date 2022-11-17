"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    nombre: String,
    apePat: String,
    apeMat: String,
    pasword: String,
    telefono: String,
    email: String
});
exports.userModel = mongoose_1.default.model('Usuario', UserSchema);
