const jwt = require("jsonwebtoken");

const User = require('../models/User');

const authenticate = async (req , res , next) =>{
    try{
        const FrontEndToken = req.cookies.AuthToken;
        const verifyToken = jwt.verify(FrontEndToken , process.env.SECRET_KEY)

        const rootUser = await User.findOne({_id: verifyToken._id , "tokens.token": FrontEndToken})

        if(!rootUser) { throw new Error("user not Found") }

        req.token = FrontEndToken;
        req.rootUser = rootUser;

        next()

    } catch(err){
        console.log("ERROR AT MIDDLEWARE " , err)
    }
}

module.exports = authenticate;