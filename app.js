let items = ["Reading book 1","Lunch","Emails"];

const express = require("express");

let ejs = require('ejs');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get("/", function (req, res) {

    const today = new Date();

    let options = { 
        weekday: 'long',
        // year: 'numeric', 
        day: 'numeric',
        month: 'long', 
         
    };

    const day = today.toLocaleString("en-US", options);
    
    res.render("list", {
        KindOfDay: day,
        newListItems : items
    })
})

app.post("/", function(req,res){
    //console.log(req.body.task);

    items.push(req.body.task);
    res.redirect("/");
    

})


app.listen(3000, () => {
    console.log("listening on Port 3000");
});