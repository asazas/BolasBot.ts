import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("countdown")
        .setDescription('Inicia una cuenta atrás.')
        .addIntegerOption(option =>
            option.setName('tiempo')
                .setDescription('Tiempo en segundos (máximo 10)')),

    async execute(interaction: ChatInputCommandInteraction) {
        const tiempo = interaction.options.getInteger("tiempo");
    }
}