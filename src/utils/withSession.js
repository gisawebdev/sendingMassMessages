import ora from 'ora';
import chalk from 'chalk';
import pkg from 'whatsapp-web.js';
import {SESSION_FILE_PATH, groupNames} from '../app.js';
import {sendMedia, sendMessage} from '../controllers/index.js';

const {Client, MessageMedia, LocalAuth} = pkg;

/**
 * Esta es la constante que guarda el mensaje a enviar.
 * @constant {string} message
 */
const message = '';

/**
 * Esta es la constante que guarda la ruta de la multimedia a enviar.
 * @constant {string} mediaPath
 */
const mediaPath = '';

/**
 * Esta es la constante que guarda la multimedia a enviar.
 * @constant {pkg.MessageMedia | string } media
 */
const media = mediaPath !== '' ? MessageMedia.fromFilePath(mediaPath) : '';

/**
 * Variable que guarda el contador.
 *  @type {number}
 */
let counter = 0;

/**
 * Variable que guarda la instancia del cliente.
 *  @type {pkg.Client}
 */
let client;

/**
 * Variable que guarda el spinner.
 *  @type {ora}
 */
let spinner;

/**
 * Variable que guarda la validacion si es un mensaje a enviar.
 *  @constant {boolean} isMessage
 */
const isMessage = message !== '';

/**
 * Variable que guarda la validacion si es un multimedia a enviar.
 *  @constant {boolean} isMedia
 */
const isMedia = mediaPath !== '';

/**
 * Variable que guarda la validacion si todo esta vacio.
 *  @constant {boolean} isAllEmpty
 */
const isAllEmpty = !isMessage && !isMedia;

/**
 * Funcion que valida la sesion de Whatsapp.
 * @function withSession
 * @returns {void}
 */
export const withSession = () => {
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
						sendMessage(chatName, chats, client, message);
					}
					if (isMedia) {
						sendMedia(chatName, chats, client, media);
					}

					if (isAllEmpty) {
						console.log(
							`Debe colocar un ${chalk.green('Mensaje')}, una ${chalk.blue(
								'Imagen',
							)}, un ${chalk.yellow('Video')}, un ${chalk.red(
								'PDF',
							)} o un un ${chalk.magenta('Enlace')}`,
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
