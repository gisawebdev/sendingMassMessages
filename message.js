const {Client} = require('whatsapp-web.js');
const {message, sendMessageOrImage, groupNames} = require('./app');

// crear instancia del cliente
const client = new Client();

// creacion de codigo qr
client.on('qr', (qr) => {
	qrcode.generate(qr, {small: true});
});

// hacer autentificacion
client.on('authenticated', () => {
	console.log('Authenticated');
});

// inicializar al cliente
client.initialize();

// envio de la imagen a los grupos
client.on('ready', async () => {
	console.log('Client is ready');

	await client.getChats().then((chats) => {
		groupNames.forEach((chatName, i) => {
			setTimeout(() => sendMessageOrImage(chatName, chats, message), i * 10000);
		});
	});
});
