import {existsSync} from 'node:fs';
import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import ora from 'ora';
import chalk from 'chalk';
import {groups, test, bolivia, republicaDominicana} from './data.js';
import sendMessage from './controllers/sendMessage.js';
import sendMedia from './controllers/sendMedia.js';

const {Client, MessageMedia, LocalAuth} = pkg;
const SESSION_FILE_PATH = 'session';

let spinner;
const groupNames = groups;

const message = '';
const mediaPath = 'assets/img/Imagen_finde_020623.png';

const isMessage = message !== '';
const isMedia = mediaPath !== '';
const isAllEmpty = !isMessage && !isMedia;

const media = isMedia ? MessageMedia.fromFilePath(mediaPath) : '';
let counter = 0;

export let client;

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
			groupNames.forEach((chatName, i) => {
				setTimeout(() => {
					counter++;

					if (isMessage) {
						sendMessage(chatName, chats, message);
					}
					if (isMedia) {
						sendMedia(chatName, chats, media);
					}

					if (isAllEmpty) {
						console.log(
							`Debe colocar un ${chalk.green('Mensaje')}, una ${chalk.blue(
								'Imagen',
							)}, un ${chalk.yellow('Video')} o un ${chalk.red('PDF')}`,
						);
						process.exit(1);
					}

					if (counter === groupNames.length) {
						setTimeout(() => {
							console.log('------------------------------------------');
							console.log('termino🎉🎉🎉🎉🎉');
							process.exit(1);
						}, 30000);
					}
				}, i * 10000);
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
