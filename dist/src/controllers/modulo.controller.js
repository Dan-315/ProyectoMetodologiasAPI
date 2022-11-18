"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloCont = void 0;
const modulo_model_1 = require("../models/modulo.model");
const util_service_1 = require("../services/util.service");
class ModuloControll {
    getModulo(modulo) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Modulo Service", "Intento---------->  getModulo");
            return yield modulo_model_1.moduloModel.find(modulo);
        });
    }
    addModulo(modulo) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Modulo Service", "Intento---------->  addModulo");
            modulo.fechaAdd = util_service_1.utilServ.getFecha(false);
            let aux = yield new modulo_model_1.moduloModel(modulo);
            yield aux.save();
            return aux;
        });
    }
    dellModulo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Modulo Service", "Intento---------->  dellModulo");
            if ((yield modulo_model_1.moduloModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updateModulo(id, modulo) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Modulo Service", "Intento---------->  updateModulo");
            return modulo_model_1.moduloModel.findByIdAndUpdate(id, { $set: modulo }, { new: true });
        });
    }
}
exports.moduloCont = new ModuloControll;
