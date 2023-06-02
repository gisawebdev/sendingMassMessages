import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import chalk from 'chalk';
import ora from 'ora';
import {SESSION_FILE_PATH} from '../app.js';

const {Client, LocalAuth} = pkg;

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
 * Funcion que genera la sesion de Whatsapp.
 * @function withOutSession
 * @returns {void}
 */
export const withOutSession = () => {
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
