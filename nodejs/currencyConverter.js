const request = require('request');

const options = {
    method: 'GET',
    url: 'https://currency-converter5.p.rapidapi.com/currency/list',
    headers: {
        'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
        'x-rapidapi-key': '7e96c81625msh4476496a5805e96p16a530jsn5e2f29723e04',
        useQueryString: true
    }
};

request(options, (error, response, body) => {
    if (error) throw new Error(error);

    const cur = JSON.parse(body)
    console.log(cur)
    console.log(response)

});
