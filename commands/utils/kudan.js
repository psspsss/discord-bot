const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('kudan')
		.setDescription('Replies with kudan!'),
	async execute(interaction) {
		await interaction.reply('Inki maa kaa kudan be');
	},
};