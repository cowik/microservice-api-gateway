const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')

const orderHandler = require('./handler/orders');

router.get('/', orderHandler.getOrders)

module.exports = router;