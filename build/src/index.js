"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const discord_js_1 = require("discord.js");
const config_json_1 = require("../config.json");
const discord_client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMessageReactions, discord_js_1.GatewayIntentBits.GuildMessageTyping, discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.DirectMessageReactions, discord_js_1.GatewayIntentBits.DirectMessageTyping],
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.Channel, discord_js_1.Partials.Reaction, discord_js_1.Partials.User],
});
const commands = new Map();
const commandFiles = (0, fs_1.readdirSync)(`${__dirname}/commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`${__dirname}/commands/${file}`);
    commands.set(command.data.name, command);
}
const db = new Map();
const role_channels = new Map();
const eventFiles = (0, fs_1.readdirSync)(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`${__dirname}/events/${file}`).default;
    if (event.once) {
        discord_client.once(event.name, (...args) => event.execute(...args));
    }
    else {
        discord_client.on(event.name, (...args) => event.execute(...args));
    }
}
discord_client.login(config_json_1.discordToken);
//# sourceMappingURL=index.js.map