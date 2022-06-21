const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=02ca87cc2c0ceb208365587d8f7db96b&query=' + latitude + ',' + longitude + '&units=m' 

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather sevice!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else{
            callback(undefined,'The weather is Currenlt ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. But it feels like ' + body.current.feelslike + ' degrees out! The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast