import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const {Client} = pkg;

// crear instancia del cliente
const client = new Client();
let counter = 0;

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

client.on('ready', async () => {
	console.log('Client is ready');

	await client.getChats().then((chats) => {
		chats.forEach((chat, i) => {
			setTimeout(() => {
				archiveChats(chat, chats);
			}, i * 10000);
		});
	});
});

async function archiveChats(_chat, _chats) {
	if (!_chat.isGroup && !_chat.pinned) {
		await _chat.archive();
		console.log(`archived chat: ${_chat.name}`);
		counter++;

		if (counter === _chats.length) {
			console.log('----------------------------------');
			console.log('Finish');
			client.logout();
		}
	}
}
