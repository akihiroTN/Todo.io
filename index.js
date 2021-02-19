'use strict'
//追加ボタンが押された時にToDoリストが生成される機能を実装する
const click = () => {
  const input = document.getElementById("inid").value;
  document.getElementById("inid").value = "";
  const div = document.createElement("div");
  div.className = "list";
  //console.log(div);
  const li = document.createElement("li");
  li.className = "title1";
  li.id = "li";
  li.innerText = input;
  div.appendChild(li);
  document.getElementById("ul").appendChild(div);
  const btn1 = document.createElement("button");
  //完了ボタンが押された時に完了したToDOに移動させて、ボタンのみ消す
  btn1.addEventListener("click", () => {
    const done = btn1.parentNode;
    //console.log(done);
    document.getElementById("ul").removeChild(done);
    const secondiv = document.createElement("div");
    document.getElementById("done-area").appendChild(secondiv);
    const revebtn = document.createElement("button");
    revebtn.innerText = "戻す";
    secondiv.appendChild(li);
    secondiv.appendChild(revebtn);
    secondiv.className = "list";
    revebtn.addEventListener("click", () => {
      //ボタンの親要素を設定
      const dele = revebtn.parentNode;
      //done-areaの子要素を全て削除する
      document.getElementById("done-area").removeChild(dele);
      //戻すを押した時にtodoエリアに戻すようのdivタグを生成する
      const thirdiv = document.createElement("div");
      //li要素を子要素としてthirdiv要素に入れる
      thirdiv.appendChild(li);
      //生成したthirdivをulの子要素に挿入する
      document.getElementById("ul").appendChild(thirdiv);
      //それぞれのボタンをthirdivの子要素に
      thirdiv.appendChild(btn1);
      thirdiv.appendChild(btn2);
      thirdiv.className = "list";
    });
  });
  const btn2 = document.createElement("button");
  btn2.addEventListener("click", () => {
    const deleted = btn2.parentNode;
    document.getElementById("ul").removeChild(deleted);
  });
  btn1.innerText = "完了";
  btn2.innerText = "削除";

  div.appendChild(btn1);
  div.appendChild(btn2);
};
//追加ボタンのイベント連携
document.getElementById("btn1").addEventListener("click", () => click());
