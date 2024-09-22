// handler.js
const serverless = require("serverless-http");
const app = require('./dist/app'); // Ensure your app is bundled in 'dist/app'

module.exports.hello = serverless(app);
