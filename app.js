const express = require('express');
const app = express();
const rateLimiting = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const path = require('path');
const morgan = require('morgan');
const userRouter = require('./routes/userRoute');
const viewRouter = require('./routes/viewRoutes');
const cookieParser = require('cookie-parser');
const compression = require('compression');
// const GoogleChartsNode = require('google-charts-node');

const limiter = rateLimiting({
  max: 100,
  windowMS: 60 * 60 * 1000,
  message: {
    status: 'fail',
    message: 'To many request from this ip, please try again in hour',
  },
});
// app.use(helmet());
app.use('/api', limiter);
//data sanitization against NoSql query injection
app.use(mongoSanitize());
//data sanitization against xss
app.use(xss());
//it is wriiter to use middle ware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//1st middle ware
app.use(morgan('dev'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());

app.use((req, res, next) => {
  console.log('Hello from the middle ware');
  console.log('Cookies');
  console.log(req.cookies);
  next();
});

app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

// UI ROUTES
app.use('/', viewRouter);

// route;
app.use('/api/v1/users', userRouter);

module.exports = app;
