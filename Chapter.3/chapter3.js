var obj = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};
obj.methodA(); // { methodA: f, inner: {...} }    ( === obj)
obj["methodA"](); // { methodA: f, inner: {...} } ( === obj)

obj.inner.methodB(); // { methodB: f }            ( === obj.inner)
obj.inner["methodB"](); // { methodB: f }         ( === obj.inner)
obj["inner"].methodB(); // { methodB: f }         ( === obj.inner)
obj["inner"]["methodB"](); // { methodB: f }      ( === obj.inner)
