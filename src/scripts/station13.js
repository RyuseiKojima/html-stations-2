function changeBackgroundColor() {
  // ここに背景色を変える処理を書く。
  if(check.checked) {
    // #textidのbackgroundを更新
    document.getElementById("text").style.background = 'red';
  } else {
    document.getElementById("text").style.background = 'transparent';
  }
  console.log(check.checked);
}
