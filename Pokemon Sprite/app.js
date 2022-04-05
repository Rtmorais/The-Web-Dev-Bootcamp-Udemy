let baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector("#container");

for (i = 1; i <= 151; i++) {
  const pkCards = document.createElement("div");
  container.appendChild(pkCards);
  const sprites = document.createElement("img");
  sprites.src = `${baseUrl}${i}.png`;
  pkCards.appendChild(sprites);
  const num = document.createElement("p");
  num.innerText = `#${i}`;
  pkCards.appendChild(num);
  pkCards.classList.add("cards");
  num.classList.add("num");
}
