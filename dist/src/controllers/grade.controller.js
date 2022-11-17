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
exports.gradeCont = void 0;
const grade_model_1 = require("../models/grade.model");
const util_service_1 = require("../services/util.service");
class GradeControll {
    getGrade(grade) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  getGrade");
            return yield grade_model_1.gradeModel.find(grade);
        });
    }
    getGradeWhitOut(grade) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  getGradeWhitOut");
            let params = {};
            if (grade.id)
                params._id = { $not: { $regex: grade.id } };
            if (grade.idInstructor)
                params.idInstructor = { $not: { $regex: grade.idInstructor } };
            if (grade.nombre)
                params.nombre = { $not: { $regex: grade.nombre } };
            if (grade.horario)
                params.horario = { $not: { $regex: grade.horario } };
            if (grade.categorias)
                params.categorias = { $not: { $regex: grade.categorias } };
            if (grade.descripcion)
                params.descripcion = { $not: { $regex: grade.descripcion } };
            if (grade.duracion)
                params.duracion = { $not: { $regex: grade.duracion } };
            if (grade.costo)
                params.costo = { $not: { $regex: grade.costo } };
            if (grade.cupo)
                params.cupo = { $not: { $regex: grade.cupo } };
            return yield grade_model_1.gradeModel.find(params);
        });
    }
    getGradeSuscripted(ids, idUser, suscripted) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  getGradeSuscripted");
            let params = {
                idInstructor: { $not: { $regex: idUser } }
            };
            if (suscripted) {
                params._id = { $in: ids };
            }
            else {
                params._id = { $not: { $in: ids } };
            }
            console.log(params);
            return yield grade_model_1.gradeModel.find(params);
        });
    }
    addGrade(grade) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  addGrade");
            let horario = [];
            for (let hora of grade.horario) {
                horario.push(util_service_1.utilServ.getHora(hora));
            }
            grade.horario = horario;
            let aux = yield new grade_model_1.gradeModel(grade);
            yield aux.save();
            return aux;
        });
    }
    dellGrade(id) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  dellGrade");
            if ((yield grade_model_1.gradeModel.findByIdAndDelete(id)) != null) {
                return true;
            }
            return false;
        });
    }
    updatGrade(id, grade) {
        return __awaiter(this, void 0, void 0, function* () {
            util_service_1.utilServ.log("Grade Service", "Intento---------->  updatGrade");
            return grade_model_1.gradeModel.findByIdAndUpdate(id, { $set: grade }, { new: true });
        });
    }
}
exports.gradeCont = new GradeControll;
