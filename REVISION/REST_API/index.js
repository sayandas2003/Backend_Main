const express = require("express");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride('_method')); 

const {v4 : uuidv4} = require('uuid');

const port = 8000;
const path = require("path");

app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("its working");
})
app.listen(port, () => {
    console.log("listeninig to port number ", port);
})



let posts = [
    {
        id: uuidv4(),
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id: uuidv4(),
        username : "shradhakhapra",
        content : "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username : "rahulkumar",
        content : "I got selected for my 1st internship!"
    }
]


// get all post - 
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});



// add new post -
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let username = req.body.username;
    let content = req.body.content;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
})


// see post - 
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
})


// edit post - 
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})
app.patch("/posts/:id" , (req, res) => {
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newcontent;
    console.log(post);
    res.redirect("/posts");
})



// delete post - 
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.redirect("/posts");
    res.render("index.ejs", {posts});
})