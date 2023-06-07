const express = require('express');
const router = express.Router();
const userController = require('../controller/users');

const { validateAddUser , validateGetUserById , validateUpdateUserById ,validateDeleteUserById } = require("../validation/userValidation");


router.post('/addUser',validateAddUser ,userController.addUsers);
router.get('/getUserById',validateGetUserById ,userController.getUserById);
router.get('/getAllUsers',userController.viewAllUser);
router.put('/updateUserById',validateUpdateUserById ,userController.updateUserById);
router.delete('/deleteUserById',validateDeleteUserById , userController.deleteUserById);

module.exports = router;