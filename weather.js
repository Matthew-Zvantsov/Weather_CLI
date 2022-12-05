import {getArgs} from './helpers/args.js';
import { printHelp, printError, printMessage } from './services/logResp.js';
import { saveKeyValue } from './services/storageService.js';
import {sendRequest} from './services/requestsSender.js'

const saveToken = async (token) => {
	if(!token.length)
	{
		printError('Не передан токен!');
	}
	else{
		try {
			await saveKeyValue('token', token);
			printMessage('Токен сохранён');
		} catch (e) {
			printError(e.message);
		}
	}
}

const saveCity = async (city) => {
	if(!city.length)
	{
		printError('Город не установлен!');
	}
	else{
		try {
			await saveKeyValue('city', city);
			printMessage('Город сохранён');
		} catch (e) {
			printError(e.message);
		}
	}
}
const startCli = () => {
    const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	else{
		try {
			sendRequest();
		} catch (e) {
			printError(e.message);
		}
	}
}

startCli();