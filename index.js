/*
 * Bobby Martin
 * 2018
 */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.listen(80, () => console.log('app listening on port 80'));