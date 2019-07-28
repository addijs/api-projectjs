const connectDatabase = require('./database');
const express = require('express');
const cors = require('cors');

const server = express();

function setCors() {
    server.use(express.json());
    server.use(cors());
}

function setRoutes() {
    server.get('/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h3>ProjectJS API - V1.0.0<h3>\n');
    });

    server.use('/api', require('../models/company/routes'));
}

connectDatabase();
setCors();
setRoutes();

module.exports = server;