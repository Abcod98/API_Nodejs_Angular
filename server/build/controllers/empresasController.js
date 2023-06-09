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
exports.empresasController = void 0;
const database_1 = __importDefault(require("../database"));
class EmpresasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresas = yield database_1.default.promise().query('SELECT * FROM empresas');
            res.json(empresas[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresas = yield database_1.default.promise().query('SELECT * FROM empresas WHERE id = ?', [id]);
            if (empresas.length > 0) {
                return res.json(empresas[0]);
            }
            res.status(404).json({ text: 'La empresa no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO empresas set ?', [req.body]);
            res.json({ message: 'Empresa guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE empresas set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'La empresa a sido actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM empresas WHERE id = ?', [id]);
            res.json({ message: 'Empresa eliminada' });
        });
    }
}
exports.empresasController = new EmpresasController();
