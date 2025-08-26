const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
    .then(()=> {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}



app.get("/", (req, res) => {
    res.send("Hi, I am root");
})



// app.get("/testListing", (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the lake",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     sampleListing.save()
//     .then( (resp) => {
//         console.log(resp);
//         res.send("successful testing");
//     })
// });


// Index Route -
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});










app.listen(8080, () => {
    console.log("server is listening to port 8080");
});