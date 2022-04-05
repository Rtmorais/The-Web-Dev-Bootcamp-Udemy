const btnRandom = document.querySelector("#btnRandom");
const color = document.querySelector("span");

btnRandom.addEventListener("click", () => {
  const newColor = randomColor();
  document.querySelector("body").style.backgroundColor = newColor;
  color.innerText = newColor;
});

const randomColor = () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r},${g},${b})`;
};
