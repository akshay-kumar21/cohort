const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors({
    domain: ["http://localhost:3000"]
}));

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

app.listen(5000);
