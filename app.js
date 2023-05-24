const {MessageMedia} = require('whatsapp-web.js');
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

module.exports = {
	groupNames,
	image,
	message,
	sendMessageOrImage
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