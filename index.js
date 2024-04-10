const mongodb = require('./db/connect');
const express = require('express');
const path = require('path');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const bodyParser = require('body-parser');

const serverPort = 8081;

// Create Express app
const app = express();

// Define routes
app.use(bodyParser.json());
app.use('/', require('./routes'));

// Load the OpenAPI specification
const openApiDoc = YAML.load(path.join(__dirname, 'api/openapi.yaml'));

// Serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDoc));


// Connect to MongoDB
mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to DB');
        // Start the server after MongoDB connection is established
        const server = http.createServer(app);
        server.listen(serverPort, function () {
            console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
            console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
        });
    }
});



