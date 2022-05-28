const express = require('express');
const morgan = require('morgan');
require("colors");

const app = express();

// middleware

app.use(express.json())
app.use(morgan('dev'))

//route

app.get('/',(req,res)=>{
    res.send("hellooo")
})

app.listen(8080,() => {
 console.log("server runnging on port")
})
