const express = require('express');
const viewController = require('./../controllers/viewsController');
const router = express.Router();
const authController = require('./../controllers/authController');

// router.use(authController.isLoggedIn);

//setup for the UI
// router.get('/', (req, res) => {
//   res.status(200).render('base', {
//     tour: 'The forest hiker',
//     user: 'susheel kumar',
//   });
// });
router.get('/', viewController.setLogin);
router.get('/warehouse-one-two', viewController.warehouseOneTwo);
router.get('/signup', viewController.signUp);
// router.get('/tour/:slug', authController.protect, viewController.getTour);
// router.get('/login', authController.isLoggedIn, viewController.setLogin);
// router.get('/me', authController.protect, viewController.getAccount);
// router.get('/gateway', viewController.consumeGetApi);
module.exports = router;
