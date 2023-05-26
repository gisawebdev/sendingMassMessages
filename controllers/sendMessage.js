import chalk from 'chalk';
import {client} from '../app.js';

// funcion para mandar el mensaje a los grupos
async function sendMessage(_groupName, _chats, _message) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await client.sendMessage(myChat.id._serialized, _message);
		console.log(`Message sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}

export default sendMessage;
