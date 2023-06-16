import { existsSync } from 'node:fs';
import pkg from 'whatsapp-web.js';
// import { groups, test } from './src/data/data.js';

import chalk from 'chalk';
import { withOutSession } from './src/utils/withOutSession.js';

const { Client, LocalAuth } = pkg;
const SESSION_FILE_PATH = 'session';

let client;

const withSession = () => {
	client = new Client({
		authStrategy: new LocalAuth({ dataPath: SESSION_FILE_PATH }),
		puppeteer: {
			headless: true,
			executablePath:
				'../../../../../Program Files/Google/Chrome/Application/chrome.exe',
		},
	});

	// envio de la imagen o mensaje a los grupos
	client.on('ready', async () => {
		console.log('client ready');
		const contacts = await client.getContacts();

		const filteredContacts = contacts.filter((contact) => {
			const contactName =
				typeof contact.name === 'string'
					? contact.name.toLowerCase()
					: 'sin nombre';

			const searchTerm = 'VILLA SERRANO';

			return contactName.includes(searchTerm.toLowerCase());
		});

		console.log(filteredContacts);
	});

	client.on('auth_failure', () => {
		console.log(
			chalk.red(
				`Error de autentificacion vuelve a generar el codigo QR ${chalk.yellow(
					'(Borrar la carpeta session)',
				)}`,
			),
		);
	});

	client.initialize();
};

existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();
