var obj1 = {
  name: "obj1",
  func: function () {
    console.log(obj1.name);
  },
};
setTimeout(obj1.func, 1000);
