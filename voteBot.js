'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

/*client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});*/

client.on('message', async msg => {
	if (msg.author.bot) return;
	if (msg.content === 'ping') {
		msg.reply('pong');
	} else if (msg.content === 'hi') {
		msg.reply('hello');
	} else if (msg.content === 'hello') {
		msg.reply('hi');
	}  else if (msg.content === 'bye') {
		msg.reply('bye');
	}  else if (msg.content === 'fuck') {
		msg.reply("don't swear!");
	}
});

client.login(process.env.BOT_TOKEN);
