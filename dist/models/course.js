"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class Course extends sequelize_1.Model {
}
Course.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    domain: {
        type: sequelize_1.DataTypes.ENUM('Web Development', 'Data Science', 'Cyber Security', 'Frontend', 'backend'),
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'course',
});
exports.default = Course;
//# sourceMappingURL=course.js.map