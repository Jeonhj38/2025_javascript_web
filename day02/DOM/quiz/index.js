//랜덤한 색상을 버튼 10개 만들어서
//각 버튼을 누르면 box 배경색 바뀌기
//1234567890abcdef
// #f12bce
// button #f12bce

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const colorList = [..."0123456789abcdef"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];
const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map((v) => getOneOfHex())
    .join("");

Array(10)
  .fill(0)
  .forEach((v) => {
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color;
    btn.addEventListener("click", () => {
      const box = document.querySelector("#box");
      box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
  });
