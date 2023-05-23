const {Client, MessageMedia} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { groups, test } = require('./data');

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

// envio de la imagen a los grupos
client.on('ready', async () => {
	console.log('Client is ready');

	await client.getChats().then((chats) => {
		test.forEach((chatName, i) => {
			const myChat = chats.find((chat) => chat.name === chatName);

			if (myChat) {
				console.log('--------------------------------');
				console.log( myChat.id._serialized);
				console.log(myChat.name);
				console.log('--------------------------------');
			}
		});
	});
});

// inicializar al cliente
client.initialize();
