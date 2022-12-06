import chalk from "chalk"
import dedent from "dedent";
import emoji from "node-emoji";


const printError = (error) => {
    console.log(dedent(chalk.bgRed('ERROR') + '  ' + error));
}

const printMessage = (message) => {
    console.log(dedent(chalk.bgGreen('SUCCESS') + '  ' + message));
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

const chalkColor = chalk.bgRgb(68, 174, 216);

const beautyResp = (response, city) => {
    console.log(dedent(
        chalk.cyan('Актуальный прогноз погоды ') + emoji.get('partly_sunny_rain') + '\n' +
        'В городе ' + city + ' сейчас ' + response.data.weather[0].description + '\n' + 
        emoji.get('thermometer') + '  Температура воздуха:' + chalk.cyan(response.data.main.temp + ' °C') + ' Ощущается как ' + 
        chalk.cyan(response.data.main.feels_like + ' °C') + '\n' +
        emoji.get('fog') + '  Влажность: ' + chalk.cyan(response.data.main.humidity + ' %') + '\n' + 
        emoji.get('cyclone') + ' Скорость ветра: ' + chalk.cyan(response.data.wind.speed + ' м/c')
    ));
}

export { printError, printMessage, printHelp, beautyResp };