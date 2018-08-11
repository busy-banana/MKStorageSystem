const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// const login = require('./public/js/login');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, 'build')));

// app.post('/api/getMemberList',memberInfo.getMemberList);
app.listen(3000);
console.log('Node Server is running..');