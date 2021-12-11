// (2) eventListener
(function () {
  var count = 0;
  var button = document.createElement("button");
  button.innerText = "click";
  button.addEventListener("click", function () {
    console.log(++count, "times clicked");
  });
  document.body.appendChild(button);
})();
