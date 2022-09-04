const express=require('express');
const router=express.Router();
const { v4: uuidv4 } = require('uuid');
const UsersController= require('../controllers/users');

// All routes will be satrting with /users
router.get('/',UsersController.UserHome);

// To make post request from the browser we have used Postman becoz browser can only send get request 
router.post('/',UsersController.createUser);

router.get('/:id',UsersController.UserDetails);

router.delete('/:id',UsersController.Delete);

router.patch('/:id',UsersController.Patch);

module.exports = router;