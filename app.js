const express = require('express');
const app = express();

const morgan = require('morgan');
const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoute');
//it is wriiter to use middle ware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//1st middle ware
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from the middle ware ');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// route;
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
