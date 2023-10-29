const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')

async function register(req, res) {
    const { name, password, email, location } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let existingUser = await User.findOne({ email: email })
        if (existingUser) {
            res.status(404).json({message:"user already present"})
        }
        else {
            let user = await User.create({
                name: name,
                password: hashedPassword,
                email: email,
                location: location

            })
            if (user) {
                res.status(200).json({message:"user created successfully"})
            }
        }

    }
    catch (err) {
        res.send(err)

    }

}
async function login(req,res) {
    const { email, password } = req.body;
    let existingUser =await User.findOne({email:email})
    if(!existingUser){
        res.status(404).json({message:"user not found"})
    }
    else{
        const match = await bcrypt.compare(password, existingUser.password);
        if(match){
            const token=jwt.sign(
            {userId:existingUser._id.toString()},
            "kashmir@food",
            {expiresIn: '1h'}
            )
            res.status(200).json({token})
        }
        else{
            res.status(404).json({message:"incorrect email or password"})  
        }
    }



}

module.exports = {register,login}

