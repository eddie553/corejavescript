var obj = {
  method: function (x) {
    console.log(this, x);
  },
};
obj.method(1); // { method: f } 1
obj["method"](2); // { method: f } 2
