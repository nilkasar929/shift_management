"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class Employee extends sequelize_1.Model {
}
Employee.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    assignedShiftHours: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
        defaultValue: 'Employee',
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Employee',
});
exports.default = Employee;
