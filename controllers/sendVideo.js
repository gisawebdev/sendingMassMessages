import chalk from 'chalk';
import {client} from '../app.js';

// funcion para mandar la video a los grupos
async function sendVideo(_groupName, _chats, _video) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await client.sendMessage(myChat.id._serialized, _video);
		console.log(`Video sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}

export default sendVideo;
