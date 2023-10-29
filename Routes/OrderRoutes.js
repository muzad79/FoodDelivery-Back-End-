const router = require('express').Router()
const {createOrders,getOrders} = require('../controllers/oredrcontrollers')

router.post('/',createOrders)
router.post('/get',getOrders)

module.exports =router;