"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Server_1 = __importDefault(require("../db/models/Server"));
const sequelize_1 = require("../db/sequelize");
/**
 * Código a ejecutar cuando el bot esté listo tras arrancarlo, solo una vez.
 */
const ready_event = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute(discord_client) {
        return __awaiter(this, void 0, void 0, function* () {
            // inicializar bases de datos
            yield sequelize_1.sequelize.sync();
            for (const guild_id of discord_client.guilds.cache.map(guild => guild.id)) {
                const server = yield Server_1.default.findOrCreate({
                    where: { serverDiscordId: guild_id, }
                });
                sequelize_1.role_channels[guild_id] = server[0].reactionRolesChannel;
            }
            console.log(`Bot arrancado como ${discord_client.user.tag}`);
        });
    }
};
exports.default = ready_event;
//# sourceMappingURL=ready.js.map