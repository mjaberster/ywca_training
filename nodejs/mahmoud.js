
var currencies = ['USD', 'GBP'];

const options = {
    url: `https://currency-exchange.p.rapidapi.com/exchange?q=1&from=${currencies[0]}&to=${currencies[1]}`,
    headers: {
        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
        'x-rapidapi-key': 'b13c4f3d67msh8143a7f1298de7bp1e8586jsn4453f885a4e7'
    },
    qs: params
}

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(response.body);
    }
}

request(options, callback);