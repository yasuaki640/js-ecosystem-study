'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

//app codes
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);