const express = require('express')
const router = express.Router();

const pecasControllers = require('../controllers/pecasControllers.js')

router.get('/pecas', pecasControllers.indexAll)

router.post('/pecas/:motor_id', pecasControllers.store)

router.get('/pecas/:pecas_id', pecasControllers.index)

router.put('/pecas/:pecas_id', pecasControllers.update)

router.delete('/pecas/:pecas_id', pecasControllers.delete)

module.exports = router

