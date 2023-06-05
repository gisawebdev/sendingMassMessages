import {existsSync} from 'node:fs';
import {groups, test} from './data/data.js';
import {withSession, withOutSession} from './utils/index.js';

/**
 * Esta es la constante que guarda la session de Whatsapp.
 * @constant {string} SESSION_FILE_PATH
 */
export const SESSION_FILE_PATH = 'session';

/**
 * Esta es la constante que guarda el arreglo de los nombres de los grupos.
 * @constant {string[]} groupNames
 */
export const groupNames = groups;

existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();
