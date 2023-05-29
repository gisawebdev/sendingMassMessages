import {existsSync} from 'node:fs';
import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import {groups, test} from './data.js';
import ora from 'ora';
import chalk from 'chalk';

const {Client, LocalAuth} = pkg;
const SESSION_FILE_PATH = 'session';

let client;
let spinner;

const withSession = () => {
	spinner = ora(
		`Cargando ${chalk.green('Validando session con Whatsapp...\n')}`,
	);
	spinner.start();
	console.log('------------------------------------------');

	client = new Client({
		authStrategy: new LocalAuth({dataPath: SESSION_FILE_PATH}),
		puppeteer: {
			headless: true,
			executablePath:
				'../../../../../Program Files/Google/Chrome/Application/chrome.exe',
		},
	});

	// envio de la imagen o mensaje a los grupos
	client.on('ready', async () => {
		console.log('Client is ready');
		spinner.stop();

		await client.getChats().then((chats) => {
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
	});

	client.on('auth_failure', () => {
		spinner.stop();
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

// function para generar codigo qr
const withOutSession = () => {
	console.log('No tenemos session guardada');

	spinner = ora(`Generando ${chalk.blue('Codigo QR...\n')}`);
	spinner.start();

	client = new Client({
		authStrategy: new LocalAuth({dataPath: SESSION_FILE_PATH}),
		puppeteer: {
			headless: true,
		},
	});

	// creacion de codigo qr
	client.on('qr', (qr) => {
		qrcode.generate(qr, {small: true});
	});

	// hacer autentificacion
	client.on('authenticated', () => {
		console.log('Authenticado');
		spinner.stop();
	});

	// inicializar al cliente
	client.initialize();
};

existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();
