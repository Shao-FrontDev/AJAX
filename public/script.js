console.log("加载脚本成功");

let card = document.querySelector(".card");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  card.style = "color: red";
});
