import chalk from "chalk"
import dedent from "dedent";


const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + '  ' + error);
}

const printMessage = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + '  ' + message);
}

const printHelp = () => {
    console.log(
        dedent(chalk.bgYellow(' Help ') + '\n' +
        'Без параметров - вывод погоды ' + '\n' +
		'-s [CITY] для установки города ' + '\n' +
		'-h для вывода помощи ' + '\n' +
		'-t [API_KEY] для сохранения токена')
    );
}

export { printError, printMessage, printHelp };