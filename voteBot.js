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
	}

});

client.login(process.env.BOT_TOKEN);
