const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('./../../models/tourModel');
const { log } = require('console');
dotenv.config({ path: './config.env' });
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('Connected to the db ');
    console.log(con.connections);
  });

//read json file

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//imort data into db

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Succesfully loaded ');
    process.exit();

} catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Deleted succesfully ');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] == '--import') {
  importData();
} else if (process.argv[2] == '--delete') {
  deleteData();
}
console.log(process.argv);
