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
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../utils/jwt");
//code for registration
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const User1 = yield User_1.default.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        res.status(201).json({ message: 'User registered successfully', User1 });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering User', error });
    }
});
exports.register = register;
//code for login of the User
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const User1 = yield User_1.default.findOne({ where: { email } });
        if (!User1) {
            return res.status(404).json({ message: 'User not present' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, User1.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        }
        const token = (0, jwt_1.generateToken)(User1);
        res.status(200).json({ 'message': "Log in succesful", 'token': token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error while logging in', error });
    }
});
exports.login = login;
const users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield User_1.default.findAll();
        const user1 = yield allUsers.map((item) => {
            return item.dataValues;
        });
        res.status(200).json(user1);
    }
    catch (error) {
        throw error;
    }
});
exports.users = users;
//# sourceMappingURL=authController.js.map