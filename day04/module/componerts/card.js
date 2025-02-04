export const makeCard = () => {
  const article = document.createElement("article");
  const img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  const span = document.createElement("span");
  span.innerHTML = title;
  article.appendChild(img);
  article.appendChild(span);
  return article;
};
