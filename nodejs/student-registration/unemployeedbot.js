const express = require('express');
const app = express();


app.get('/answer', (req, res) => {
    // chatgpt.generateAnswers(req.query.question, (error, answers) => {
    //     if (error) {
    //         res.send('Sorry, there was an error generating an answer.');
    //     } else {
    const phrases = [
        "Sorry, I'm an unemployed bot, can't help you right now",
        "I'm just a simple bot, I don't have the ability to help with that",
        "I'm sorry, I don't have the knowledge or resources to assist with that",
        "As a bot, I'm not able to provide help at the moment"
    ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    res.send(`${phrase}`);
    // }
    // });
});

app.listen(3000, () => {
    console.log('Bot listening on port 3000');
});