// ★ 仮のコメントテスト用（あとで通信に差し替える）
const testComments = [
  "べる：いいね！",
  "匿名：🔥🔥🔥",
  "DJ最高！",
  "8888888"
];

// ページ読み込み後にテスト表示
let index = 0;
setInterval(() => {
  spawnComment(testComments[index % testComments.length]);
  index++;
}, 2000);

// コメントを流す関数
function spawnComment(text) {
  const el = document.createElement("div");
  el.className = "comment";
  el.innerText = text;

  el.style.top = Math.random() * 80 + "%";
  el.style.left = "100%";

  document.body.appendChild(el);

  el.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-120vw)" }
    ],
    {
      duration: 8000,
      easing: "linear"
    }
  );

  setTimeout(() => el.remove(), 8000);
}