const request = require('request')

const foreCast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=13df6f826bd76b83351615eb8a92df8b&query='+ latitude +','+ longitude

    request({url, json: true},(error,{ body }) => {
        if (error){
            callback('unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('unable to find the location', undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. But it feels like '+body.current.feelslike+' degrees out. And the humidity is '+body.current.humidity+' percent.')
        }
    })

}


module.exports = foreCast