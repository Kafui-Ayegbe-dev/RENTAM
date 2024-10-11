const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),
    });

    // send to database
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(err){
        // don't forget to change to right err codes
        res.status(500).json(err);
    }
    
});


module.exports = router