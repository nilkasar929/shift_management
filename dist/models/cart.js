"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const User_1 = __importDefault(require("./User"));
const course_1 = __importDefault(require("./course"));
class Cart extends sequelize_1.Model {
}
Cart.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    courseId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: course_1.default,
            key: 'id'
        }
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: User_1.default,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'cart',
});
exports.default = Cart;
//# sourceMappingURL=cart.js.map