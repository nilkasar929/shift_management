"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT
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
