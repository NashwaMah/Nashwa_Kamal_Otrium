require('dotenv').config()
import GetWeather from '../models/pages/get-weather'
const weather_details = require('../test-helpers/test-data/get-weather-request.json').request
const get_weather = new GetWeather()

fixture`Run get weather`

weather_details.forEach(request => {
    test(' -----  Get Weather  -----', async t => {
       const response= await get_weather.GetCurrentWeather(request, process.env.accesskey, process.env.APIUrl)
        await get_weather.ValidateResponse(request, response.data.request)
        await t.expect(response.status).eql(200)

    });
});

test(' -----  Get Weather with empty access token -----', async t => {

   const response= await get_weather.GetCurrentWeather(weather_details[0], "", process.env.APIUrl)
   await t.expect(response.status).eql(101)

});

test(' -----  Get Weather with empty query -----', async t => {

    const response= await get_weather.GetCurrentWeather("", process.env.accesskey, process.env.APIUrl)
    await t.expect(response.status).eql(601)
 
 });

 test(' -----  Get Weather with wrong query -----', async t => {

    const response= await get_weather.GetCurrentWeather("2", process.env.accesskey, process.env.APIUrl)
    await t.expect(response.status).eql(615)
 
 });

