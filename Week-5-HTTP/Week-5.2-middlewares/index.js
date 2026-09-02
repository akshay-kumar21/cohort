/*
You have to create a middleware for logging the number of requests on a server

You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will maintain a count of the number of 
requests made to the server in the global requestCount variable
*/


const express = require("express");

const app = express();
const port = 3000;//port in which the projest is running

//creating a global variable to store the number of request
let requestCount = 0;

//creating a middleware to keep the count of number of request came from user 
//always have the middleware cuz fuction below it can use this middleware. to func above its useless  
app.use((req, res, next) => {
    requestCount++;
    console.log(`Number of request are ${requestCount}`);
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