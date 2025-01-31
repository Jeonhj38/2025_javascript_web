const btn = document.createElement("button");
btn.innerText = "고기싸롱";
document.body.appendChild(btn);

//h1 고기싸롱 어서오고
const h1 = document.createElement("h1");
h1.innerText = "고기쌀롱 어서오고";
h1.style.color = "red";
document.body.appendChild(h1);

// buttons
// 삼겹살, 목살, 돼지갈비, 양념갈비, 항정살,
// 갈매기살, 꼬들살, 냉삼, 뽈살, 돼지껍데기,

const meats = [
  "삼겹살",
  "목살",
  "돼지갈비",
  "양념갈비",
  "항정살",
  "갈매기살",
  "꼬들살",
];

meats.forEach((x, i) => {
  const btn = document.createElement("button");
  //배경색 홀수 파란, 짝수 노란색
  btn.innerText = `${i}번째` + x;
  btn.style.backgroundColor = i % 2 ? "skyblue" : "yellow";
  btn.addEventListener("click", () => {
    alert(`${x} 고기고기`);
  });
  document.body.appendChild(btn);
});
