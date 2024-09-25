"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const User_1 = __importDefault(require("./User"));
class Claim extends sequelize_1.Model {
}
Claim.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    UserId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: User_1.default,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Claim',
});
exports.default = Claim;
//# sourceMappingURL=claims.js.map