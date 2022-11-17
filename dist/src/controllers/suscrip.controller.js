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
exports.suscripCont = void 0;
const suscrip_model_1 = require("../models/suscrip.model");
const util_service_1 = require("../services/util.service");
class SuscripControll {
    getSuscrip(suscrip) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Suscrip Service", "Intento---------->  getSuscrip");
            return yield suscrip_model_1.suscripModel.find(suscrip);
        });
    }
    addSuscrip(suscrip) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Suscrip Service", "Intento---------->  addSuscrip");
            suscrip.fechaCompra = util_service_1.utilServ.getFecha(false);
            let aux = yield new suscrip_model_1.suscripModel(suscrip);
            yield aux.save();
            return aux;
        });
    }
    dellSuscrip(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Suscrip Service", "Intento---------->  dellSuscrip");
            if ((yield suscrip_model_1.suscripModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updateSuscrip(id, suscrip) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Suscrip Service", "Intento---------->  updateSuscrip");
            return suscrip_model_1.suscripModel.findByIdAndUpdate(id, { $set: suscrip }, { new: true });
        });
    }
}
exports.suscripCont = new SuscripControll;
