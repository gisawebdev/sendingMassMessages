const {Client, MessageMedia} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const {groups, test} = require('./data');

// variables
const imagePath = 'assets/img/Clase 30.png';
const message = 'mensaje de prueba';
let counter = 0;
const groupNames = test;
const image = MessageMedia.fromFilePath(imagePath);

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

module.exports = {
	groupNames,
	image,
	message,
	sendMessageOrImage,
	client,
};






// async function sendMessageOrImage(_groupName, _id, _messageOrImage) {
// 	await client.sendMessage(_id, _messageOrImage);
// 	console.log(`Sent to the group ${_groupName}`);

// 	counter++;

// 	if (counter === groupNames.length) {
// 		console.log('----------------------------------');
// 		console.log('Finish');
// 		client.logout();
// 	}
// }