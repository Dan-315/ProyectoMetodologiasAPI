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
const inventario_controller_1 = require("../controllers/inventario.controller");
const granja_controller_1 = require("../controllers/granja.controller");
const modulo_controller_1 = require("../controllers/modulo.controller");
exports.resolvers = {
    Query: {
        default: () => 'GraphQL default execution',
        getGranja: (_, { granja }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(granja);
            return yield granja_controller_1.granjaCont.getGranja(granja);
        }),
        getAdmin: (_, { admin }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield admin_controller_1.adminCont.getAdmin(admin);
        }),
        getInventario: (_, { inventario }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield inventario_controller_1.inventarioCont.getInventario(inventario);
        }),
        getModulo: (_, { modulo }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield modulo_controller_1.moduloCont.getModulo(modulo);
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
        addInventario: (_, { inventario }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield inventario_controller_1.inventarioCont.addInventario(inventario);
        }),
        updatInventario: (_, { id, inventario }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield inventario_controller_1.inventarioCont.updateInventario(id, inventario);
        }),
        dellInventario: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield inventario_controller_1.inventarioCont.dellInventario(id);
        }),
        addModulo: (_, { modulo }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield modulo_controller_1.moduloCont.addModulo(modulo);
        }),
        updateModulo: (_, { id, modulo }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield modulo_controller_1.moduloCont.updateModulo(id, modulo);
        }),
        dellModulo: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            let invents = yield inventario_controller_1.inventarioCont.getInventario({ idModulo: id });
            // console.log(invents);
            for (let inv of invents) {
                yield inventario_controller_1.inventarioCont.dellInventario(inv.id);
            }
            return yield modulo_controller_1.moduloCont.dellModulo(id);
        }),
    }
};
