const fs = require("fs");

fs.readFile("users.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var users = data.split("\n\n");
  var correctUsers = 0;
  var lastCheckedUser = "";
  const fields = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"];
  users.forEach((user) => {
    if (fields.every((field) => user.includes(field))) {
      correctUsers++;
      lastCheckedUser = user;
    }
  });
  console.log(correctUsers);
  console.log(lastCheckedUser);
});
