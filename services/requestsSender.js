import { getKeyValue } from "./storageService.js";
import axios from 'axios';
const sendRequest = async () => {
    let city = await getKeyValue('city');
    let token = await getKeyValue('token');
    if(city != undefined && token != undefined){
        let httpreq1 = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + token;
        axios.get(httpreq1)
        .then(response => {
            let lat = response.data[0].lat;
            let lon = response.data[0].lon;
            let httpreq2 = 'https://api.openweathermap.org/data/2.5/weather?';
            axios.get(httpreq2, {
                params: {
                    lat: lat,
			        lon: lon,
                    appid: token,
			        lang: 'ru',
			        units: 'metric'
                }
            })
            .then(response => {
                console.log(response.data);
            })
        })
        .catch(error => {
            console.log(error);
          });
    }
}

export {sendRequest};