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
//     {name: "sayan", email: "tony@gmail.com", age: 50},
//     {name: "P", email: "peter@gmail.com", age: 30},
//     {name: "B", email: "bruce@gmail.com", age: 70}
// ])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })





// User.findById("68aa96947df4bd4f6f769073")
// .then((res) => {
//     console.log(res.name);
// })
// .catch((err) => {
//     console.log(err);
// })





// User.findByIdAndUpdate("68aa96947df4bd4f6f769073", {age:40}, {new: true})
// .then((res) => {
//     console.log(res);
// })


User.findOneAndDelete({age: {$gt: 99}})
.then((res) => {
    console.log(res);
})