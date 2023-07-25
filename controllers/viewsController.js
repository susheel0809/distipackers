const Tour = require('../models/tourModel');

exports.getOverview = async (req, res, next) => {
  //1) Get tour data from collection
  const tours = await Tour.find();

  //2) Build template

  //3) Render thaat template using tour data from one
  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
};

exports.getTour = (req, res) => {
  //Slug is the id we have passed in view url
  // req.params.slug
  res.status(200).render('tour', {
    title: 'Individual Info',
  });
};

exports.setLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'User login',
  });
};
