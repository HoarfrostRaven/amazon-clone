// Creating an API

// import
const express = require('express');

const PORT = 3000;
const app = express();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});

// http://<ip_address>/hello-world
app.get('/hello-world', (request, result) => {
    result.json({title: "hello!"});
})

app.get('/', (request, result) => {
    result.send("hello!");
})