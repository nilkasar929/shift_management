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
exports.generateReport = void 0;
const shift_1 = __importDefault(require("../models/shift"));
const exceljs_1 = require("exceljs");
const generateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shifts = yield shift_1.default.findAll();
        const workbook = new exceljs_1.Workbook();
        const worksheet = workbook.addWorksheet('Report');
        worksheet.columns = [
            { header: 'Employee ID', key: 'employeeId' },
            { header: 'Start Time', key: 'startTime' },
            { header: 'End Time', key: 'endTime' },
            { header: 'Actual Hours', key: 'actualHours' },
        ];
        shifts.forEach((shift) => {
            worksheet.addRow({
                employeeId: shift.employeeId,
                startTime: shift.startTime,
                endTime: shift.endTime,
                actualHours: shift.actualHours
            });
        });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        yield workbook.xlsx.write(res);
        res.status(200).end();
    }
    catch (error) {
        res.status(500).json({ message: 'Error generating report', error });
    }
});
exports.generateReport = generateReport;
//# sourceMappingURL=reportController.js.map