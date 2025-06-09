

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pattam')
		.setDescription('Replies with pattam!'),
	async execute(interaction) {
		await interaction.reply('Maa ka bhosdam pattam');
	},
};