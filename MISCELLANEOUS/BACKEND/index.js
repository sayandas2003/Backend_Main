const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`standard GET respose. Welcome ${user}`);
})

app.post("/register", (req, res)=>{
    let {user, password} = req.body;
    res.send(`standard POST respose. Welcome ${user}`);
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})