import chalk from 'chalk';
import pkg from 'whatsapp-web.js';

/**
 * Envía un archivo multimedia a un grupo.
 * @param {string} _groupName - Nombre del grupo.
 * @param {Array<Object>} _chats - Array de chats.
 * @param {pkg.Client} _client - Cliente de WhatsApp.
 * @param {pkg.MessageMedia} _media - Archivo multimedia a enviar.
 * @returns {Promise<void>}
 */
export async function sendMedia(_groupName, _chats, _client, _media) {
	const myChat = _chats.find((chat) => chat.name === _groupName);

	if (myChat) {
		await _client.sendMessage(myChat.id._serialized, _media);
		console.log(`Media sent to the group ${chalk.cyan(`${_groupName}`)}`);
	} else {
		console.log(`Chat ${_groupName} not found`);
	}
}
