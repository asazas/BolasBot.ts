/* eslint-disable @typescript-eslint/no-var-requires */

import { readdirSync } from "fs";
import { ChatInputCommandInteraction, Client, GatewayIntentBits, Partials, SlashCommandBuilder } from "discord.js";
import { Sequelize } from "sequelize";

import { dbLogging, discordEmojiGuildId, discordToken, twitchClientId, twitchClientSecret } from '../config.json';

const discord_client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping],

    partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User],
});

interface DiscordCommand {
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction, db?: Sequelize) => Promise<void>;
}
const commands = new Map<string, DiscordCommand>();
const commandFiles = readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command: DiscordCommand = require(`${__dirname}/commands/${file}`);
    commands.set(command.data.name, command);
}

const db = new Map<string, Sequelize>();
const role_channels = new Map<string, string>();

const eventFiles = readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`${__dirname}/events/${file}`).default;
    if (event.once) {
        discord_client.once(event.name, (...args) => event.execute(...args));
    } else {
        discord_client.on(event.name, (...args) => event.execute(...args));
    }
}

discord_client.login(discordToken);