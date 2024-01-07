const check = document.getElementById("check");
console.log(check.checked);
// チェックボタンが押されるたびにchangeBackgroundColorを発火
// addEventListener(type, listener)
check.addEventListener("change", changeBackgroundColor);
