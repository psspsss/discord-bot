
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('chill')
		.setDescription('Replies with chill!'),
	async execute(interaction) {
		await interaction.reply('Chill b');
	},
};