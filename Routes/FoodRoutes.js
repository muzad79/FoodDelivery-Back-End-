const router = require('express').Router()
const {getFoodItems} = require('../controllers/foodControllers')

router.get('/',getFoodItems)

module.exports =router;