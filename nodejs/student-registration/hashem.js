const express = require('express');
const bcrypt = require('bcrypt')

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
mongoose.connect('mongodb://0.0.0.0:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
    const user = req.body
    if (!user) {
        res.status(400).send('Please send a valid user')
        return
    }
    const enPassword = bcrypt.hash(user.password, 12)
    console.log(enPassword)
    await mongoose.connection.db.collection('users').insertOne({ username: user.username, password: enPassword });
    res.status(201).send('Created')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(400).send('Both username and password are mandotary');
    }
    const user = await mongoose.connection.db.collection('users').findOne({ username: username });

    if (!user) {
        return res.status(401).send('Unauthorized');
    }

    if (bcrypt.compare(password, user.password)) {
        res.send('Access granted');
    } else {
        return res.status(401).send('Unauthorized');
    }

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));