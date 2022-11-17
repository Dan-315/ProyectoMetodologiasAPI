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
exports.adminCont = void 0;
const admin_model_1 = require("../models/admin.model");
const util_service_1 = require("../services/util.service");
class AdminControll {
    getAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("admin Service", "Intento---------->  getAdmin");
            return yield admin_model_1.adminModel.find(admin);
        });
    }
    addAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("admin Service", "Intento---------->  addAdmin");
            console.log(admin);
            let aux = yield new admin_model_1.adminModel(admin);
            yield aux.save();
            return aux;
        });
    }
    dellAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("admin Service", "Intento---------->  dellAdmin");
            if ((yield admin_model_1.adminModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updatAdmin(id, admin) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("admin Service", "Intento---------->  updateAdmin");
            return admin_model_1.adminModel.findByIdAndUpdate(id, { $set: admin }, { new: true });
        });
    }
}
exports.adminCont = new AdminControll;
