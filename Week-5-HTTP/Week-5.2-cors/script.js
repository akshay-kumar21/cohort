const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());// Middleware to parse the request body as JSON
app.use(cors());// Middleware to enable CORS

app.post("/sum", (req, res) => {

    console.log("POST recieved");

    console.log("request body: ", req.body);


    const a = Number(req.body.a);
    const b = Number(req.body.b);

    console.log("answer= ", a + b);

    res.json({
        answer : a + b
    })
})

app.listen(5005);
