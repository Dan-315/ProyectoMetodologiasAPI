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
exports.resolvers = void 0;
const admin_controller_1 = require("../controllers/admin.controller");
const grade_controller_1 = require("../controllers/grade.controller");
const granja_controller_1 = require("../controllers/granja.controller");
const suscrip_controller_1 = require("../controllers/suscrip.controller");
exports.resolvers = {
    Query: {
        default: () => 'GraphQL default execution',
        getGranja: (_, { granja }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield granja_controller_1.granjaCont.getGranja(granja);
        }),
        getAdmin: (_, { admin }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield admin_controller_1.adminCont.getAdmin(admin);
        }),
        getGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.getGrade(grade);
        }),
        getSuscrip: (_, { suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.getSuscrip(suscrip);
        }),
        getGradeWhitOut: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.getGradeWhitOut(grade);
        }),
        CountSuscripPerGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            let suscrips = yield suscrip_controller_1.suscripCont.getSuscrip({ idCurso: grade.id });
            return suscrips.length;
        }),
    },
    Mutation: {
        addGranja: (_, { granja }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield granja_controller_1.granjaCont.addGranja(granja);
        }),
        updatGranja: (_, { id, granja }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield granja_controller_1.granjaCont.updatGranja(id, granja);
        }),
        dellGranja: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield granja_controller_1.granjaCont.dellGranja(id);
        }),
        addAdmin: (_, { admin }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield admin_controller_1.adminCont.addAdmin(admin);
        }),
        updatAdmin: (_, { id, admin }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield admin_controller_1.adminCont.updatAdmin(id, admin);
        }),
        dellAdmin: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield admin_controller_1.adminCont.dellAdmin(id);
        }),
        addGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.addGrade(grade);
        }),
        updatGrade: (_, { id, grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.updatGrade(id, grade);
        }),
        dellGrade: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.dellGrade(id);
        }),
        addSuscrip: (_, { suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.addSuscrip(suscrip);
        }),
        updateSuscrip: (_, { id, suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.updateSuscrip(id, suscrip);
        }),
        dellSuscrip: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.dellSuscrip(id);
        }),
    }
};
