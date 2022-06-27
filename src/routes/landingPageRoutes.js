// MODULES
const express = require("express");

// INIT VARIABLES
const router = new express.Router();


// END POINTS
router.get("/landing", (req, res) => {

    res.status(400).send("landing");

})




module.exports = router;



