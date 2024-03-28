const express = require('express');
const groceriesRoute = require('./routes/groceries')
const markets = require('./routes/market')


const app = express();
const PORT = 3001;

//Middleware used to process POST requests

app.use(express.json());
app.use(express.urlencoded());
app.use(groceriesRoute);
app.use('/markets',markets);


app.listen(PORT, ()=> console.log("Running express server on port 3001"));














