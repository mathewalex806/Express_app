console.log("Hello, world");

const express = require('express');

const app = express();

const PORT = 3001;

//Middleware used to process POST requests

app.use(express.json());
app.use(express.urlencoded());

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


app.get('/groceries', 
(req, res, next) => 
{
    console.log("Before handling the request");
    next();
},
(req, res, next)=> 
{
    res.send(goList);
    next();
},
()=>
{
    console.log("Finished execution");
}

);

app.post('/groceries', (req, res) =>
{
    console.log(req.body);
    goList.push(req.body);
    res.send(201);

});

// Route parameters ---> Used to take input from the url.

app.get('/groceries/:item',(request, response)=>
{
    console.log(request.params.item);
    
    const item = request.params.item;
    const groceryItem = goList.find((g)=> g.item == item);
    response.send(groceryItem,200);
})



















