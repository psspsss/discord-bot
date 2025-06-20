const { SlashCommandBuilder } = require("discord.js");
const { execute } = require("./ping");


module.exports={
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information regarding the user. '),
    async execute(interaction){

        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt} .`);
    },
};