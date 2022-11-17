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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
const util_service_1 = require("./src/services/util.service");
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./src/graphQl/typeDefs");
const resolvers_1 = require("./src/graphQl/resolvers");
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        const app = (0, express_1.default)();
        const port = process.env.PORT ? process.env.PORT : "";
        const host = process.env.DBHOST ? process.env.DBHOST : "";
        const db = process.env.DBNAME ? process.env.DBNAME : "";
        const apolloServ = new apollo_server_express_1.ApolloServer({
            typeDefs: typeDefs_1.typeDefs,
            resolvers: resolvers_1.resolvers
        });
        yield apolloServ.start();
        apolloServ.applyMiddleware({ app });
        app.get('/', (req, res) => res.send("Apprende API"));
        app.get('*', (req, res) => res.status(404).send("Ruta no encontrada"));
        try {
            app.listen(port, () => {
                util_service_1.utilServ.log(`${process.env.HOST}:${port}`, `Servidor iniciado. GrphQL playground en:

        ${process.env.HOST}:${port}/graphql`, "info");
            });
        }
        catch (error) {
            let e = error;
            util_service_1.utilServ.log(`${process.env.HOST}:${port}`, e.name + ": " + e.message, "error");
        }
        database_1.apprendeDB.initConect(host, db).then(() => {
            util_service_1.utilServ.log(host + db, "Conectado satisfactoriamente", "info");
        }).catch((error) => {
            util_service_1.utilServ.log(host + db, error.name + ": " + error.message, "error");
        });
    });
}
start();
