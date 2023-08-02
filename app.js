const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const userRouter = require('./routes/userRoute');
const viewRouter = require('./routes/viewRoutes');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const GoogleChartsNode = require('google-charts-node');

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
