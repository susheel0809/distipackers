const { json } = require('express');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.aliasTopTour = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingAverage,price';
  // req.query.fields = 'name,price,summary,difficulty,ratingAverage';
  next();
};

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //Build query
    //commeting it because we noneed it 1A
    const queryObj = { ...this.queryString };
    const excludeFields = ['page', 'sort', 'limit', 'fieds'];
    excludeFields.forEach((el) => delete queryObj[el]);

    this.query.find(queryObj);
    //Advance filtering 1B
    // let queryStr = JSON.stringify(queryObj);
  }
}

//route handlers
exports.getAllTours = async (req, res) => {
  // console.log('requested time', req.requestTime);
  try {
    console.log(req.query);
    // //Build query
    // //commeting it because we noneed it 1A
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fieds'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // //Advance filtering 1B
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr) + 'Query String');
    console.log('log' + queryStr);

    //let is used because result can be changed in this variable
    let query = Tour.find(JSON.parse(queryStr));

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    //This part should work it is not working for now we will pick it later
    // if (req.query.fields) {
    //   console.log('Inside fields' + req.query.fields);
    //   const fields = req.query.fields.split(',').join(' ');
    //   console.log(fields + ' my fields');
    //   query = query.select(fields);
    // }

    //pagination
    //page=2&limit=10
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    //set validation if record not exist on spcific page
    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) {
        throw new Error('This page does not exist.!');
      }
    }

    //pagintion end

    //Execute query

    const tours = await Tour.find(query);
    //query.sort().select().skip().limit()

    //sorting

    //Send response
    res.status(200).json({
      status: 'success',
      requestedOn: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const tour = await Tour.findById(id);
    res.status(200).json({
      status: 'Success',
      data: tour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }

  // const tour = tours.find((el) => el.id == id);

  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid Id',
  //   });
  // }

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({ status: 'Success', data: { tours: newTour } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  await Tour.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// exports.checkID = (req, res, next, val) => {
//   console.log(`Id  by param is ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       staus: 'fail',
//       message: 'Invalid Id',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   console.log('Here logs for name and price ');
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'failed',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };
