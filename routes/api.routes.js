const express = require('express');
let router = express.Router();

const UserRouter = require('./user.route');

router.use('/user', UserRouter);

module.exports = router;
