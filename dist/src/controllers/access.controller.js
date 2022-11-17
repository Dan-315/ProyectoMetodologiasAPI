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
exports.accesCont = void 0;
const access_model_1 = require("../models/access.model");
const util_service_1 = require("../services/util.service");
class AccesControll {
    getAcces(acces) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Access Service", "Intento---------->  getAcces");
            return yield access_model_1.accesModel.find(acces);
        });
    }
    addAcces(acces) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Access Service", "Intento---------->  addAcces");
            acces.fechaAcceso = util_service_1.utilServ.getFecha(false);
            let aux = yield new access_model_1.accesModel(acces);
            yield aux.save();
            return aux;
        });
    }
    dellAcces(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Access Service", "Intento---------->  dellAcces");
            if ((yield access_model_1.accesModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updatAcces(id, acces) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Access Service", "Intento---------->  updatAcces");
            return access_model_1.accesModel.findByIdAndUpdate(id, { $set: acces }, { new: true });
        });
    }
}
exports.accesCont = new AccesControll;
