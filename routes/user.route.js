const express = require('express');
let router = express.Router();

var UserController = require('../controllers/user.controller');
const auth = require('../auth/auth');

router.post('/registration',UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/profile', auth, UserController.getUser);
router.delete('/:id', auth, UserController.removeUser);


module.exports = router;