"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const shiftRoutes_1 = __importDefault(require("./routes/shiftRoutes"));
const timesheetRoutes_1 = __importDefault(require("./routes/timesheetRoutes"));
const reportRoutes_1 = __importDefault(require("./routes/reportRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/shift', shiftRoutes_1.default);
app.use('/api/timesheet', timesheetRoutes_1.default);
app.use('/api/report', reportRoutes_1.default);
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});
//# sourceMappingURL=app.js.map