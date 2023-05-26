import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import {groups, test} from './data.js';

const {Client} = pkg;

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

// envio de la imagen a los grupos
client.on('ready', async () => {
	console.log('Client is ready');

	try {
		await client.getChats().then((chats) => {
			// console.log(chats);

			test.forEach((chatName, i) => {
				const myChat = chats.find((chat) => chat.name === chatName);

				if (myChat) {
					console.log('--------------------------------');
					console.log(myChat.id._serialized);
					console.log(myChat.name);
					console.log('--------------------------------');
				}
			});
		});
	} catch (error) {
		console.log(error);
	} finally {
		client.destroy();
	}
});
