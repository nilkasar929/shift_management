"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const credentials_1 = __importDefault(require("../common/credentials"));
dotenv_1.default.config();
const generateToken = (user) => {
    const payload = {
        name: user.name,
        id: user.id,
        email: user.email,
        role: user.role,
    };
    return jsonwebtoken_1.default.sign(payload, credentials_1.default.secret_key.JWT_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
//# sourceMappingURL=jwt.js.map