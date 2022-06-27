
// MODULES
require("dotenv").config();
const express = require("express");


// ROUTER IMPORTS
const tutorialRoute = require("./routes/tutorialRoutes");
const classesRoute = require("./routes/classesRoutes");
const landingRoute = require("./routes/landingPageRoutes");


// IMPORTANT VARS
const app = express();
const port = process.env.PORT || 5000;


// MIDDLEWARE
app.use(express.json());


// ROUTER CONFIG
app.use(tutorialRoute);
app.use(classesRoute);
app.use(landingRoute);


// ROOT ENDPOINTS
app.get("/", (req, res) => {
    res.status(200).send("Hello");
})


// LISTENER
app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
})
