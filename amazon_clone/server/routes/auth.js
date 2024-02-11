// IMPORT FROM PACKAGES
const express = require("express");

// INIT
const authRouter = express.Router();
module.exports = authRouter;

authRouter.get('/user', (request, result) => {
    result.json({
        message: "My message"
    });
})