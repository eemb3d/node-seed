var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var compression = require('compression');
var helmet = require('helmet');
//var cors = require('cors');

require('dotenv').config()

var app = express();

// app.use(cors())

// require('/utils/db').init;

// view engine setup
// NC
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser());
// app.use(helmet());
// app.use(compression()); // Compress all routes

// NC
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('TEST!'))
// Add ALL routes to middleware chain.
// app.use('/', indexRouter);
// app.use('/smth1', smth1);
// app.use('/smth2', smth2);  

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
// });

module.exports = app;
