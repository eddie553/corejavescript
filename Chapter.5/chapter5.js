var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul");

var alertFruit = function (fruit) {
  alert("your choice is " + fruit);
};
fruits.forEach(function (fruit) {
  var $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);
