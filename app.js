 const express = require('express');
 const mongoose = require('mongoose');

 const app = express();

// connection to mongodb

mongoose.connect("mongodb://localhost/todo_dd", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


 // middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.use(require("./routes/index"));
app.use(require('./routes/todo'));

// Server Configuration

app.listen(3000, () => console.log("Server is listening at port 3000"));