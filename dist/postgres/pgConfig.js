"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: "postgres",
    host: "localhost",
    port: 5432,
    password: "root",
    database: "postgres",
    dialect: "postgres"
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
