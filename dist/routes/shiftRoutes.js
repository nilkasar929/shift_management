"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shiftController_1 = require("../controllers/shiftController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/start', authMiddleware_1.default, shiftController_1.startShift);
router.post('/end', authMiddleware_1.default, shiftController_1.endShift);
exports.default = router;
