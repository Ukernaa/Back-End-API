// MODULES
const express = require("express");

// INIT VARIABLES
const router = new express.Router();


// END POINTS
router.get("/tutorial", (req, res) => {

    res.status(400).send("tutorial");

})




module.exports = router;



