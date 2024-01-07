function displayList() {
  // fruitsタグを取得
  const element = document.getElementById("fruits");
  console.log(element);
  // fruitsタグ内を書き換え
  element.innerHTML = "<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>";
}