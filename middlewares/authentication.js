const jwt = require('jsonwebtoken')

async function authenticate(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    try {
        if (!token) {
            res.status(404).json({ message: "unauthorized access" })
        }
        else {
            const decoded = jwt.verify(token, "Kashmir@food")
            req.user = decoded;
            next()
        }
    }
    catch (err) {
        console.log(err)
    }


}