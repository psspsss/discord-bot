
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biryani')
		.setDescription('Replies with biryani!'),
	async execute(interaction) {
		await interaction.reply('Humari tarah biryani kha sakta hai kya, dum maar sakta hai kya, beer pi sakta hai kya 😅😅😅🤟🤟🤟');
	},
};