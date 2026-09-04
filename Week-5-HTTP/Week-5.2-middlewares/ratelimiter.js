/* Create a middleware function that logs each incoming request’s HTTP method,
URL, and timestamp to the console*/

const express = require("express");

const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log(`The HTTP Method called is ${req.method}, request to ${req.originalUrl} at ${new Date()}`);
    next();
});

app.get("/sum/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a + b
    });
});

app.get("/sub/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a - b
    });
});

app.get("/multiply/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a * b
    });
});


app.get("/divide/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a / b
    });
});

app.listen(port);