const {message, sendMessageOrImage, groupNames, client} = require('./app');

// envio de la imagen a los grupos
client.on('ready', async () => {
	console.log('Client is ready');

	await client.getChats().then((chats) => {
		groupNames.forEach((chatName, i) => {
			setTimeout(() => sendMessageOrImage(chatName, chats, message), i * 10000);
		});
	});
});
