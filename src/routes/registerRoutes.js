// MODULES
const express = require("express");

// INIT VARIABLES
const router = new express.Router();


// END POINTS
router.get("/login", (req, res) => {

    res.status(400).send("login");

})

router.get("/signup", (req, res) => {

    res.status(400).send("signup");

})



module.exports = router;



