import chalk from 'chalk';
import {client} from '../app.js';

// funcion para mandar el multimedia a los grupos
async function sendMedia(_groupName, _chats, _media) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await client.sendMessage(myChat.id._serialized, _media);
		console.log(`Media sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}

export default sendMedia;
