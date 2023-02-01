import { data } from "./data.js";

function createCardHp(obj) {
  const cardHp = document.createElement("div");
  cardHp.className = "hp__card";
  const cardT = document.createElement("div");
  cardT.className = "hp__text";
  const img = document.createElement("div");
  img.className = "hp__pic";
  const cardIm = document.createElement("img");
  cardIm.src = obj.image;
  img.append(cardIm);
  cardT.innerHTML = `<h2>${obj.name}</h2>
  <p>Actor: ${obj.actor}</p>
  <p>Gender: ${obj.gender}</p>
  <p>House: ${obj.house}</p>
  <p>Wand core: ${obj.wand.core}</p>
  <p>Alive: ${obj.alive ? "Yes" : "No"}</p>`;
  cardHp.innerHTML;
  cardHp.append(img, cardT);
  return cardHp;
}

data.forEach((el) =>
  document.querySelector(".hp__cards").append(createCardHp(el))
);
