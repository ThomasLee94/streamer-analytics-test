const express = require('express');
const userRoutes = require('./api/user/user.routes');

const router = express.Router();

router.use('/episodes', userRoutes);

module.exports = router;