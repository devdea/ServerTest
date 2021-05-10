
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  //server side
  //here you can perform some logic on server side to send back to the user
  var date = new Date();

  var options = {
    weeday: "long",
    day: "numeric",
    month: "long"
  };

  var day = date.toLocaleDateString("en-US", options);

  //renders the html file passing in variables we got in the server
  res.render("list", {kindOfDay: day, newListItems: items});
});

//app.post handles post requests from html files and ejs files, in this case list.ejs
app.post("/", function(req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
  console.log(item);
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
