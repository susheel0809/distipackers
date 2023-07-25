const express = require('express');
const viewController = require('./../controllers/viewsController');
const router = express.Router();

//setup for the UI
router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The forest hiker',
    user: 'susheel kumar',
  });
});

router.get('/tour/:slug', viewController.getTour);

router.get('/overview', viewController.getOverview);

router.get('/login', viewController.setLogin);

module.exports = router;
