const {Router} = require('express');
const router = Router();


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

router.get('/groceries/:item',(request, response)=>
{
    console.log(request.params.item);
    
    const item = request.params.item;
    const groceryItem = goList.find((g)=> g.item == item);
    response.send(groceryItem,200);
})

router.post('/groceries', (req, res) =>
{
    console.log(req.body);
    goList.push(req.body);
    res.send(201);

});

router.get('/groceries', 
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


//This allows us to export the router object to the index.js file.

module.exports= router;