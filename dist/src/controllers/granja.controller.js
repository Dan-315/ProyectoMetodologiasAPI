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
exports.granjaCont = void 0;
const granja_model_1 = require("../models/granja.model");
const util_service_1 = require("../services/util.service");
class GranjaControll {
    getGranja(granja) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(granja);
            util_service_1.utilServ.log("granja Service", "Intento---------->  getGranja");
            return yield granja_model_1.granjaModel.find(granja);
        });
    }
    addGranja(granja) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("granja Service", "Intento---------->  addGranja");
            granja.fechaAdd = util_service_1.utilServ.getFecha(false);
            let aux = yield new granja_model_1.granjaModel(granja);
            yield aux.save();
            return aux;
        });
    }
    dellGranja(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("granja Service", "Intento---------->  dellGranja");
            if ((yield granja_model_1.granjaModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updatGranja(id, granja) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("granja Service", "Intento---------->  updateGranja");
            return granja_model_1.granjaModel.findByIdAndUpdate(id, { $set: granja }, { new: true });
        });
    }
}
exports.granjaCont = new GranjaControll;
