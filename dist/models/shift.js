"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const User_1 = __importDefault(require("./User"));
class Shift extends sequelize_1.Model {
}
Shift.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    UserId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: User_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Shift',
});
exports.default = Shift;
//# sourceMappingURL=shift.js.map