const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


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
    console.log('Server is up and running on port numner ' + port);
});

module.exports = app;
