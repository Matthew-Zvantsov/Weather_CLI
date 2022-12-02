import {getArgs} from './helpers/args.js';
import { printHelp } from './services/logResp.js';
const startCli = () => {
    const args = getArgs(process.argv);
    console.log(args);
	if (args.h) {
		printHelp();
	}
	if (args.s) {
		console.log(args.s)
	}
	if (args.t) {
		console.log(args.t)
	}
}

startCli();