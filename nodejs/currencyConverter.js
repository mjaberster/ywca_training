const request = require('request');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv
const from = argv.from
const to = argv.to
const amount = argv.amount


const options = {
    method: 'GET',
    url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`,
    headers: {
        'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
        'x-rapidapi-key': '7e96c81625msh4476496a5805e96p16a530jsn5e2f29723e04',
        useQueryString: true
    }
};

request(options, (error, response, body) => {
    if (error) throw new Error(error);

    const cur = JSON.parse(body)
    console.log(`${amount}${from} is equal to ${cur.rates[to].rate_for_amount} in ${to}`)

});
