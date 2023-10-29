const {body,validationResult} = require('express-validator')

 const validateUser=[
    body('email').isEmail().withMessage("email must be atleast 5 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long"),
    body('name').isLength({min:5}).withMessage("name must be atleast 5 characters long")

 ]
 const validate = (
    req,
    res,
    next
  ) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
module.exports={validate,validateUser}
