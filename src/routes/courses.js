const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission')

const coursesHandler = require('./handler/courses');

router.get('/', coursesHandler.getAll)
router.get('/:id', coursesHandler.get)

router.post('/', verifyToken, can('superadmin'), coursesHandler.create)
router.put('/:id', verifyToken, can('superadmin'), coursesHandler.update)
router.delete('/:id', verifyToken, can('superadmin'), coursesHandler.destroy)

module.exports = router;