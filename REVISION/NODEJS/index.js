const express = require("express");
const app = express();
app.use(express.json());

let port = 3000;
app.listen(port, () => {
    console.log("listening on port ",port);
})

app.get("/", (req, res) => {
    console.log("hi there");
    res.send("its working bro!");
})

app.get("/hi", (req, res)=>{
    res.send("hi is working");
})

app.get("/hi/there", (req, res)=>{
    res.send("there is working");
})

app.post("/hi/post", (req, res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}, your age is ${req.body.age}`);
});


app.get ("/:username/:id", (req, res) => {
    let {username , id} = req.params;
    let htmlstr = `<h1>@${username}</h1>`;
    res.send(htmlstr);
})

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("search page");
})