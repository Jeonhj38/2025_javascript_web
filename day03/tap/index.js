const list = [
    { id: "home", desc: "home is something", bg: "red"};
    
]





const contacts = document.querySelector("#contacts");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");

list.forEach((v) => {
  const btn = document.querySelector("#" + v.id);
  btn.addEventListener("click", () => {
    list.forEach((v) => {
      const target = document.querySelector("#" + v.id);
      target.style.backgroundColor = "#efefef";
      target.style.color = "black";
    });
    btn.style.backgroundColor = v.bg;
    btn.style.color = "white";
    contens.style.backgroundColor = v.bg;
    title.innerHTML = v.id;
    desc.innerHTML = v.desc;
  });
});
