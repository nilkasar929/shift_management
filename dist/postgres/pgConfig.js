"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // This may be necessary depending on your Render configuration
        },
    },
    // Adjust the path as needed
});
sequelize.authenticate()
    .then(() => {
    console.log("Database is connected");
}).catch((error) => {
    console.log("error connecting to database", error);
});
sequelize.sync()
    .then(() => {
    console.log("database is synchronized");
}).catch((error) => {
    console.log("error in syncronizing the databse ", error);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map