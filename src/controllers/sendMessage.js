import chalk from 'chalk';
import pkg from 'whatsapp-web.js';

/**
 * Envía un mensaje a un grupo.
 * @param {string} _groupName - Nombre del grupo.
 * @param {Array<Object>} _chats - Array de chats.
 * @param {pkg.Client} _client - Cliente de WhatsApp.
 * @param {string} _message - Mensaje a enviar.
 * @returns {Promise<void>}
 */
export async function sendMessage(_groupName, _chats, _client, _message) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await _client.sendMessage(myChat.id._serialized, _message);
		console.log(`Message sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}
