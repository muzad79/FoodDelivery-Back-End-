const router= require('express').Router()
const {register,login} = require('../controllers/userController')
const {validate,validateUser} = require('../middlewares/validation')

router.post('/',validateUser,validate,register)
router.post('/login',login)


module.exports=router