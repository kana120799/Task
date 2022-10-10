var pTag = document.querySelector("p");
var num = document.querySelector("input");
var timer;
function sum(e) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(typeof e.target.value);
    if (e.target.value < 0) {
      pTag.innerHTML = "enter a positive value";
    } else if (e.target.value > 0 && e.target.value % 2 == 0) {
      var str = "";
      for (var i = 1; i < 4; i++) {
        var x = Number(e.target.value) + i * 2;
        str += `${x}, `;
      }
      pTag.innerHTML = str;
    } else if (e.target.value > 0 && e.target.value % 2 != 0) {
      var str = "";
      for (var i = 1; i < 4; i++) {
        var x = Number(e.target.value) + i * 2;
        str += `${x}, `;
      }
      pTag.innerHTML = str;
    }
  }, 1500);
}
num.addEventListener("keyup", (e) => {
  sum(e);
});

// Remove Text from Element
num.addEventListener("blur", (e) => {
  e.target.value = "";

  pTag.innerHTML = "";
});
