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
exports.users = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const employee_1 = __importDefault(require("../models/employee"));
const jwt_1 = require("../utils/jwt");
//code for registration
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, assignedShiftHours, role } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const employee = yield employee_1.default.create({
            name,
            email,
            password: hashedPassword,
            assignedShiftHours,
            role,
        });
        res.status(201).json({ message: 'Employee registered successfully', employee });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering employee', error });
    }
});
exports.register = register;
//code for login of the employee
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const employee = yield employee_1.default.findOne({ where: { email } });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not present' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, employee.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        }
        const token = (0, jwt_1.generateToken)(employee);
        res.status(200).json({ 'message': "Log in succesful", 'token': token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error while logging in', error });
    }
});
exports.login = login;
const users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield employee_1.default.findAll();
        const user = yield allUsers.map((item) => {
            return item.dataValues;
        });
        res.status(200).json(user);
    }
    catch (error) {
        throw error;
    }
});
exports.users = users;
//# sourceMappingURL=authController.js.map