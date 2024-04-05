'use strict';
const mongodb = require('./db/connect');
const express = require('express');
const path = require('path');
const http = require('http');
const oas3Tools = require('oas3-tools');
const serverPort = 8080;

// SwaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfig.getApp();

// Initialize the Swagger middleware
const server = http.createServer(app);

server.listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

const routes = express.Router();
routes.get('/', (req, res, next) => {
    res.json('Andrew Blad');
});

mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to DB');
    }
});
