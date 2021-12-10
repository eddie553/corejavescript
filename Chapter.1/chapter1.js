var user = {
  name: "Jaenam",
  gender: "male",
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "Jung");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name); // Jung Jung
console.log(user === user2); // true
