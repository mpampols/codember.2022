const fs = require("fs");

fs.readFile("users.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var users = data.split("\n\n");
  var validUsers = 0;
  var lastValidUser = "";

  const fields = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"];

  users.forEach((user) => {
    if (fields.every((field) => user.includes(field))) {
      validUsers++;
      lastValidUser = user;
    }
  });

  console.log("Valid users: " + validUsers);
  console.log("Last valid user: " + lastValidUser);
});
