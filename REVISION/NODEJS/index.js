const express = require("express");
const app = express();

// for EJS
app.set("view engine", "ejs");

// render frontend form at localhost:3000/form
app.get("/form", (req, res) => {
    res.render("form.ejs");   // renders views/form.ejs
});

// backend route to capture params
app.get("/register/:user/:id", (req, res) => {
    let user = req.params.user;
    let password = req.params.id;
    res.send("Welcome " + user + ", your password is " + password);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
