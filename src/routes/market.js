const {Router} = require('express')
const router = Router();


const supermarkets = [
    {
        store: "Whole foods"
    },
    {
        store: "Walmart"
    },
    {
        store: "Trader Joe's"
    }
]


router.get('', (request, response)=>
{
    response.send(supermarkets,200);
    
});


module.exports = router;