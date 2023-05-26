const {Client, MessageMedia} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const {groups, test, bolivia, republicaDominicana} = require('./data');

// variables

let counter = 0;
const groupNames = groups;
const imagePath = 'assets/img/Imagen fin de semana 260523.png';
const message = '';

const isMessage = message !== '';
const isImage = imagePath !== '';

const image = isImage ? MessageMedia.fromFilePath(imagePath) : '';

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

// envio de la imagen o mensaje a los grupos
client.on('ready', async () => {
	console.log('Client is ready');

	await client.getChats().then((chats) => {
		groupNames.forEach((chatName, i) => {
			setTimeout(() => {
				if (isMessage) {
					sendMessageOrImage(chatName, chats, message);
				}
				if (isImage) {
					sendMessageOrImage(chatName, chats, image);
				}
			}, i * 10000);
		});
	});
});

// funcion para mandar la imagen o mensaje a los grupos
async function sendMessageOrImage(_groupName, _chats, _messageOrImage) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await client.sendMessage(myChat.id._serialized, _messageOrImage);
		console.log(`Sent to the group ${_groupName}`);

		counter++;

		if (counter === groupNames.length) {
			console.log('----------------------------------');
			console.log('Finish');
			client.logout();
		}
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}
