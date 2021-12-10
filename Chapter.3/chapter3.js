var obj = {
  outer: function () {
    console.log(this); // (1) { outer: f }
    var innerFunc1 = function () {
      console.log(this); // (2) Window { ... }
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self); // (3) { outer: f }
    };
    innerFunc2();
  },
};
obj.outer();
