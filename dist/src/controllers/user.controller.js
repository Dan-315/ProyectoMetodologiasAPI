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
exports.userCont = void 0;
const users_model_1 = require("../models/users.model");
const util_service_1 = require("../services/util.service");
class UserControll {
    getUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("User Service", "Intento---------->  getUser");
            return yield users_model_1.userModel.find(user);
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("User Service", "Intento---------->  addUser");
            let aux = yield new users_model_1.userModel(user);
            yield aux.save();
            return aux;
        });
    }
    dellUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("User Service", "Intento---------->  dellUser");
            if ((yield users_model_1.userModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updatUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("User Service", "Intento---------->  updatUser");
            return users_model_1.userModel.findByIdAndUpdate(id, { $set: user }, { new: true });
        });
    }
}
exports.userCont = new UserControll;
