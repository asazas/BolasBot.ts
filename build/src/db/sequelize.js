"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_channels = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_json_1 = require("../../config.json");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: `${__dirname}/../../../data/BolasBotData.db`,
    logging: config_json_1.dbLogging ? console.log : false,
    models: [`${__dirname}/../db/models`]
});
exports.role_channels = {};
//# sourceMappingURL=sequelize.js.map