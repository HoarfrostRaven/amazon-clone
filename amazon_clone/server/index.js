// IMPORT FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

// IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth')

// INIT
const PORT = 3000;
const app = express();

// middle ware
app.use(authRouter);

// Connections
mongoose.connect()
    .then(() => {
        console.log(`Connected to the database.`)
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});