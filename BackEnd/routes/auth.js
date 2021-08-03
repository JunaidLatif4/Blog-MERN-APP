const router = require("express").Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Auth = require("../middleware/authenticate")

const User = require("../models/User");




// REGISTER
router.post("/register", async (req, res) => {

    let salt = await bcrypt.genSalt(10);
    let hashedPass = await bcrypt.hash(req.body.password, salt)

    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPass,

    });
    await newUser.save()
        .then((response) => {
            res.json(response)
        }).catch((err) => {
            res.json(err)
        });

});




// LOGIN
router.post('/login', async (req, res) => {

    let user = await User.findOne({ email: req.body.email })
    let validate = await bcrypt.compare(req.body.password, user.password)
    let token;

    let { password, ...others } = user._doc;
    !user ? (res.json({ err: true, msg: "Wrong Email!" })) :
        !validate ? (res.json({ err: true, msg: "Wrong Password!" })) :
            token = await user.generateAuthToken();
    console.log(token)
    res.cookie("AuthToken", token, {
        expires: new Date(Date.now() + 3.6e+6),
        httpOnly: true
    })
    res.json({ err: false, msg: others })



    // !user && res.json({err:true , msg:"Wrong Email!"})

    // !validate && res.json({err:true , msg:"Wrong Password!"})
    // res.json({err:false , msg:user})
})

// Geting UserData
router.post('/getuser', Auth, async (req, res) => {
    res.json({ User: req.rootUser })
})




module.exports = router;