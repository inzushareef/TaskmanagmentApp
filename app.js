const express = require("express");

let ejs = require('ejs');

const bodyParser = require("body-parser");

const res = require("express/lib/response");
const { render } = require("express/lib/response");

const app = express();

app.set('view engine', 'ejs');


app.get("/",function(req,res){

    const today = new Date();

    const day = today.getDay();

    if(day === 0 || day === 2){
        res.render('list', { day: "Weekend" , task: "Party"});
      
    }else{
        
        res.render('list', { day: "Weekday", task: "Work"});
    }
})


app.listen(3000,()=>{
    console.log("listening on Port 3000");
});