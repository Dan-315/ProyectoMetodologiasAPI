"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilServ = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const chalk_1 = __importDefault(require("chalk"));
const info = chalk_1.default.bold.cyan;
const error = chalk_1.default.bold.red;
const warn = chalk_1.default.bold.yellow;
const normal = chalk_1.default.bold.white;
const tz = process.env.TZ || 'America/Mexico_City';
moment_timezone_1.default.locale('es');
class UtilService {
    log(origen, message, type) {
        let typ, premess;
        if (type == "error") {
            premess = `--ERROR:`;
            typ = error;
        }
        else if (type == "info") {
            premess = `--INFO:`;
            typ = info;
        }
        else if (type == "warn") {
            premess = `--WARNING:`;
            typ = warn;
        }
        else {
            premess = ``;
            typ = normal;
        }
        if (type)
            console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
        console.log(premess + `\n${this.getFecha(true)}`);
        console.log(`[${origen}]-->     ${message}`);
        if (type)
            console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
    }
    getFecha(fromat, date) {
        let aux = date ? (0, moment_timezone_1.default)(new Date(date)).tz(tz) : (0, moment_timezone_1.default)().tz(tz);
        return fromat ?
            aux.format("DD/MMMM/YYYY - HH:mm:ss") : aux.toString();
    }
    getHora(time) {
        let aux = time ? (0, moment_timezone_1.default)(new Date("Jan 01 2000 " + time)) : moment_timezone_1.default.utc();
        return aux.tz(tz).format("HH:mm:ss");
    }
}
exports.utilServ = new UtilService();
