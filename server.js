'use strict';

const express = require('express');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

let server = express();

let api = require('./routes/api');
server.use('/_api/',api);



