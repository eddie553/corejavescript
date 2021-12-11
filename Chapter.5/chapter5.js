var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul"); // (공통 코드)

fruits.forEach(function (fruit) {
  // (A)
  var $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", function () {
    // (B)
    alert("your choice is " + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);
