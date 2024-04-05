const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Social Media API',
    description: 'API for social media application'
  },
  host: 'https://social-media-api-3zqx.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);