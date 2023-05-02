import { Sequelize } from "sequelize-typescript";
import { dbLogging } from '../../config.json';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `${__dirname}/../../../data/BolasBotData.db`,
    logging: dbLogging ? console.log : false,
    models: [`${__dirname}/../db/models`]
});

export const role_channels = new Map<string, string>();