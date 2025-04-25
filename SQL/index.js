const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'sayandas2003'
  });


// Inserting New Data using placeholders (?)
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// try {
//   connection.query(q, user, (err, result) => {
//       if(err) throw err;
//       console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }


// // for multiple users -
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];

// try {
//   connection.query(q, [users], (err, result) => {
//       if(err) throw err;
//       console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }



// for inserting in bulk using faker -
let getRandomUser = () => {
  return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password(),
  ];
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i=1; i<=100; i++) {
  data.push(getRandomUser()); // 100 fake users data generated and stored
}

try {
  connection.query(q, [data], (err, result) => {
      if(err) throw err;
      console.log(result);
  });
} catch (err) {
  console.log(err);
}



//   console.log(getRandomUser());

connection.end();