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
exports.inventarioCont = void 0;
const inventario_model_1 = require("../models/inventario.model");
const util_service_1 = require("../services/util.service");
class InventarioControll {
    getInventario(inventario) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Inventario Service", "Intento---------->  getInventario");
            return yield inventario_model_1.inventarioModel.find(inventario);
        });
    }
    addInventario(inventario) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Inventario Service", "Intento---------->  addInventario");
            inventario.fechaUpdate = util_service_1.utilServ.getFecha(false);
            if (inventario.minimo >= 0 && inventario.existencias >= 0) {
                let solicitud = inventario.minimo - inventario.existencias;
                inventario.solicitud = solicitud > 0 ? solicitud : 0;
            }
            else {
                inventario.minimo = inventario.existencias = inventario.solicitud = 0;
            }
            let aux = yield new inventario_model_1.inventarioModel(inventario);
            yield aux.save();
            return aux;
        });
    }
    dellInventario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Inventario Service", "Intento---------->  dellInventario");
            if ((yield inventario_model_1.inventarioModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updateInventario(id, inventario) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Inventario Service", "Intento---------->  updateInventario");
            inventario.fechaUpdate = util_service_1.utilServ.getFecha(false);
            if (inventario.minimo && inventario.existencias) {
                let solicitud = inventario.minimo - inventario.existencias;
                inventario.solicitud = solicitud > 0 ? solicitud : 0;
            }
            return inventario_model_1.inventarioModel.findByIdAndUpdate(id, { $set: inventario }, { new: true });
        });
    }
}
exports.inventarioCont = new InventarioControll;
