// ページ読み込み確認
console.log("script.js 読み込まれた");

// 2秒ごとにコメントを流す
setInterval(() => {
  spawnComment("テスト：流れてますか？");
}, 2000);

function spawnComment(text) {
  const el = document.createElement("div");
  el.className = "comment";
  el.textContent = text;

  el.style.top = Math.random() * 80 + "%";
  el.style.left = "100%";

  document.body.appendChild(el);

  el.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-120vw)" }
    ],
    {
      duration: 6000,
      easing: "linear"
    }
  );

  setTimeout(() => {
    el.remove();
  }, 6000);
}