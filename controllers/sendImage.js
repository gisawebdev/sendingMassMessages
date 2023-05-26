import chalk from 'chalk';
import {client} from '../app.js';

// funcion para mandar la imagen a los grupos
async function sendImage(_groupName, _chats, _image) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await client.sendMessage(myChat.id._serialized, _image);
		console.log(`Image sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}

export default sendImage;
