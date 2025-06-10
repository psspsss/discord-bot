
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('sutta')
		.setDescription('Replies with sutta!'),
	async execute(interaction) {
		await interaction.reply('Sutta lao bey');
	},
};