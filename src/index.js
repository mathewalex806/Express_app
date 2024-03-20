console.log("Hello, world");

const express = require('express');

const app = express();

const PORT = 3001;

const goList = [
    {
    item: "milk",
    quantity: 2
    },
    {
        item: "biscuits",
        quantity: 5
    },
    {
        item: "watermelon",
        quantity: 4
    }

];

app.listen(PORT, ()=> console.log("Running express server on port 3001"));


app.get('/groceries', (req, res)=> {
    res.send(goList);
});

app.post('/groceries', (req, res) =>
{
    console.log(req.body);
    res.send(201);

});





















