const express = require('express');
const viewController = require('./../controllers/viewsController');
const router = express.Router();
const authController = require('./../controllers/authController');

router.get('/', viewController.setLogin);
router.get('/home', authController.isLoggedIn, viewController.myHome);
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
router.get('/signup', viewController.signUp);
module.exports = router;
