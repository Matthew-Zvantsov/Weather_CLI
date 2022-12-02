import {getArgs} from './helpers/args.js';
const startCli = () => {
    const args = getArgs(process.argv);
    console.log(args);
	if (args.h) {
		console.log(args.h)
	}
	if (args.s) {
		console.log(args.s)
	}
	if (args.t) {
		console.log(args.t)
	}
}

startCli();