const router = require('express').Router();

router.get("/usertest", (req,res)=> {
    res.send("user test is ok")
})

router.post("/userposttest", (req,res)=> {
    const username = req.body.username;
    res.status(200).send("your uname is: " + username)
})

module.exports = router