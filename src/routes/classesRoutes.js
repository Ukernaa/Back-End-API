// MODULES
const express = require("express");

// INIT VARIABLES
const router = new express.Router();


// END POINTS
router.get("/classes", (req, res) => {

    res.status(400).send("classes");

})




module.exports = router;



