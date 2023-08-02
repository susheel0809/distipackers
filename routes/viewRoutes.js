const express = require('express');
const viewController = require('./../controllers/viewsController');
const router = express.Router();
const authController = require('./../controllers/authController');
const { route } = require('./tourRoute');

// router.use(authController.isLoggedIn);

//setup for the UI
// router.get('/', (req, res) => {
//   res.status(200).render('base', {
//     tour: 'The forest hiker',
//     user: 'susheel kumar',
//   });
// });
router.get('/', viewController.setLogin);
router.get(
  '/warehouse-one-two',
  authController.isLoggedIn,
  viewController.warehouseOneTwo
);
router.get(
  '/warehouse_three',
  authController.isLoggedIn,
  viewController.warehouseThree
);
router.get('/signup', viewController.signUp);
router.get(
  '/users',
  authController.isLoggedIn,
  authController.protect,
  authController.allowedTo('admin'),
  viewController.allUsers
);
router.get(
  '/me',
  authController.isLoggedIn,
  authController.protect,
  viewController.getAccount
);
// router.get('/tour/:slug', authController.protect, viewController.getTour);
// router.get('/login', authController.isLoggedIn, viewController.setLogin);

// router.get('/gateway', viewController.consumeGetApi);
module.exports = router;
