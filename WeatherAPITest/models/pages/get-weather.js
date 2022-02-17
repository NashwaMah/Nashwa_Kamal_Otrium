import { t } from 'testcafe';
require('dotenv').config()

class GetWeather {
    constructor() {
        this.axios = require('axios')
        this.fs = require("fs");
    }

    async GetCurrentWeather(request, accessKey, APIURL) {
        const response = await this.axios.get(APIURL + "current", {
            params: {
                'access_key': accessKey,
                'query': request.query,
                'units': request.units
            }
        });
        return response
    }

    async ValidateResponse(element, response) {
        console.log(response)
        let element_query = element.query
        if (element.type == "LatLon") {
            element_query = await this.GetLatLonValue(element.query)
        }
        await t.expect(response.type).eql(element.type)
        await t.expect(response.query).contains(element_query)
        if (element.units) {
            await t.expect(response.unit).eql(element.units)
        }
        else {
            await t.expect(response.unit).eql("m")
        }
    }

    async GetLatLonValue(query) {
        const lat = parseFloat(query.split(",")[0]).toFixed(2)
        const lon = parseFloat(query.split(",")[1]).toFixed(2)
        const latlon = "Lat " + lat + " and Lon " + lon
        console.log(latlon)
        return latlon
    }

}
export default GetWeather
