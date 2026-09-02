const express = require('express');

const app = express();

//using "Number" instead of pareInt() cuz even if one character is not a number it throws a error
//whereas parseInt parese the input till there is number and stops when it encounters a string or non number
//we strictly want a number & ask user to input a number
app.get("/sum/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        answer: a + b
    })
})

app.get("/subtract/:a/:b", (req, res) => {
    
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        answer: a - b
    })
})


app.get("/multiply/:a/:b", (req, res) => {
    // const a = Number(req.params.a);
    // const b = Number(req.params.b);
    const { a, b } = (req.params);
    

    res.json({
        answer: Number(a) * Number(b)
    })

})

app.get("/divide/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        answer: a/b
    });

});

app.listen(3000);