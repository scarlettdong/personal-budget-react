const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;
const cors = require('cors');


// Use cors middleware before your routes

app.use('/', express.static('public'));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budgetdata.json', 'utf8', (err, data) => {
        if (err) {
            console.error("file read error:", err);
            res.status(500).send('Server error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});