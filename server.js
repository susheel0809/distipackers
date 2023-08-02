const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
console.log(app.get('env'));
console.log(process.env);

const PORT = process.env.PORT || 8000;

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((con) => {
    console.log(con.connection);
    console.log('Db Connection succesfull');
  });

// mongoose
//   .connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then((con) => {
//     console.log('Connected to the db ');
//     console.log(con.connections);
//   });

// const testTour = new Tour({
//   name: 'Package name',
//   rating: 5,
//   price: 3000,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(`Error is` + err);
//   });

//start server
// const port = 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
