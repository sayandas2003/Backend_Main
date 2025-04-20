const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


const User = mongoose.model("User", userSchema);

// const user2 = new User({
//     name: "ranisha", 
//     email:"ranisha@gmail.com", 
//     age:22
// });

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 70}
// ])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })





// User.findById("6804f82187a702fbc856b86f")
// .then((res) => {
//     console.log(res.name);
// })
// .catch((err) => {
//     console.log(err);
// })





// User.findByIdAndUpdate("6804f82187a702fbc856b86e", {age:40}, {new: true})
// .then((res) => {
//     console.log(res);
// })


User.findOneAndDelete({age: {$gt: 99}})
.then((res) => {
    console.log(res);
})