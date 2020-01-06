const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

require('dotenv').config();
require('./config/passport')(passport);

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Shoot! API', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'API for Shoot! @ Artevelde'
    },
  },
  host: 'localhost:1234',
  basePath: 'api/',
  schemes: 'https',
  // Path to the API docs
  apis: [path.join(__dirname, './api/routes/*.js'), path.join(__dirname, './api/models/*.js')],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


// connect to mongdb
mongoose.connect(process.env.MONGODB_STRING);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const port = 1234;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});

module.exports = app;
