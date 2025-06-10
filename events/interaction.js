const { Events, MessageFlags, Collection } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found`);
			return;
		}

		if (!interaction.client.cooldowns) {
			interaction.client.cooldowns = new Collection();
		}
		const cooldowns = interaction.client.cooldowns;

		if (!cooldowns.has(command.data.name)) {
			cooldowns.set(command.data.name, new Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.data.name);
		const cooldownAmount = (command.cooldown ?? 3) * 1000;

		if (timestamps.has(interaction.user.id)) {
			const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = Math.round((expirationTime - now) / 1000);
				return interaction.reply({
					content: `⏳ Please wait \`${timeLeft}\` more second(s) before using \`${command.data.name}\` again.`,
					ephemeral: true
				});
			}
		}

	
		timestamps.set(interaction.user.id, now);
		setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);


		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({
					content: 'There was an error while executing this command!',
					flags: MessageFlags.Ephemeral
				});
			} else {
				await interaction.reply({
					content: 'There was an error while executing this command!',
					flags: MessageFlags.Ephemeral
				});
			}
		}
	},
};
