import { Client, Events } from "discord.js";
import Server from "../db/models/Server";
import { role_channels, sequelize } from "../db/sequelize";

interface ReadyEvent {
    name: Events,
    once: boolean,
    execute: (discord_client: Client) => Promise<void>,
}

/**
 * Código a ejecutar cuando el bot esté listo tras arrancarlo, solo una vez.
 */
const ready_event: ReadyEvent = {
    name: Events.ClientReady,
    once: true,
    async execute(discord_client) {
        // inicializar bases de datos

        await sequelize.sync()

        for (const guild_id of discord_client.guilds.cache.map(guild => guild.id)) {
            const server = await Server.findOrCreate({
                where: { serverDiscordId: guild_id, }
            });
            role_channels[guild_id] = server[0].reactionRolesChannel;
        }

        console.log(`Bot arrancado como ${discord_client.user.tag}`);
    }
}

export default ready_event;