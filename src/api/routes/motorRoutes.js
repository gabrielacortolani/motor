const express = require('express')
const router = express.Router();

const motorControllers = require('../controllers/motorControllers.js')

router.get('/motor', motorControllers.indexAll)

router.get('/motor/:motor_id', motorControllers.index)

router.post('/motor', motorControllers.store)

router.put('/motor/:motor_id', motorControllers.update)

router.delete('/motor/:motor_id', motorControllers.delete)

module.exports = router
