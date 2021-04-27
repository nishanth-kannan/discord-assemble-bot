//wait till the bot goes live
console.log('Setting it up...')

const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
const {token} = require("./config.json")
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Bot is online!');
});

// login to Discord with your app's token
client.login(token);

client.on('message', message => {
	const msg = message.content;
	const commandRegex = /gangbang/gi;
	if (msg.match(commandRegex)) {
		message.channel.send("@everyone");
		const assembleEmbed = new Discord.MessageEmbed()
		.setColor('#f21170')
		.setTitle(`${message.author.username} requests a gangbang`)
		.setDescription("less goo")
		.setImage('https://i.imgur.com/OYi7C5V.png')
		.setTimestamp()
		.setFooter('Aishwarya made me do this');

	message.channel.send(assembleEmbed);
	}
});