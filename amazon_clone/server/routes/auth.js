// IMPORT FROM PACKAGES
const express = require("express");

// INIT
const authRouter = express.Router();
module.exports = authRouter;

authRouter.post('/api/signup', (request, result) => {
    // get the data from client
    console.log(request.body);
    const {name, email, password} = request.body;

    // post the data in database
    // return the data to the user
});