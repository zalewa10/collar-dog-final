const liteObroza = document.getElementById("lite-collar");
const proObroza = document.getElementById("pro-collar");
const przedmioty = document.querySelector(".przedmioty");
const koszyk = document.querySelector(".koszyk");
const payment = document.querySelector(".zaplata");
itemLiteCounter = 0;
itemProCounter = 0;

let cenaLite = 149.99;
let cenaLiteP = document.createElement("p");
let ilośćLite = document.createElement("p");
let itemLite = document.createElement("div");
let nameLite = document.createElement("h2");
let minusButtonLite = document.createElement("button");

minusButtonLite.setAttribute("id", "minus-lite");
minusButtonLite.innerHTML = "Usuń";
minusButtonLite.style.background = "red";
liteObroza.addEventListener("click", () => {
  if (itemLiteCounter == 0) {
    itemLiteCounter += 1;
    koszyk.classList.add("koszyk-widoczny");
    itemLite.style.border = "1px solid lightgrey";
    itemLite.style.borderRadius = "15px";
    itemLite.style.padding = "10px";
    ilośćLite.innerHTML = `Ilość: ${itemLiteCounter}`;
    nameLite.innerText = "Obroża CollarDog Lite";
    cenaLiteP.style.float = "left";
    cenaLiteP.style.marginRight = "50px";
    cenaLiteP.innerHTML = `${cenaLite * itemLiteCounter} ZŁ`;
    itemLite.appendChild(nameLite);
    itemLite.appendChild(cenaLiteP);
    itemLite.appendChild(ilośćLite);
    przedmioty.appendChild(itemLite);
    itemLite.appendChild(minusButtonLite);
    itemLite.style.marginBottom = "20px";
  } else {
    console.log("drugi");
    itemLiteCounter += 1;
    ilośćLite.innerHTML = `Ilość: ${itemLiteCounter}`;
    cenaLiteP.innerHTML = `${cenaLite * itemLiteCounter} ZŁ`;
  }
});

minusButtonLite.addEventListener("click", () => {
  przedmioty.removeChild(itemLite);
  itemLiteCounter = 0;
  nameLite.innerText = "";
  if (itemLiteCounter == 0 && itemProCounter == 0) {
    koszyk.classList.remove("koszyk-widoczny");
  }
});

let cenaPro = 199.99;
let cenaProP = document.createElement("p");
let ilośćPro = document.createElement("p");
let itemPro = document.createElement("div");
let namePro = document.createElement("h2");
let minusButtonPro = document.createElement("button");

minusButtonPro.setAttribute("id", "minus-lite");
minusButtonPro.innerHTML = "Usuń";
minusButtonPro.style.background = "red";

proObroza.addEventListener("click", () => {
  if (itemProCounter == 0) {
    itemProCounter += 1;
    koszyk.classList.add("koszyk-widoczny");
    itemPro.style.border = "1px solid lightgrey";
    itemPro.style.borderRadius = "15px";
    itemPro.style.padding = "10px";
    ilośćPro.innerHTML = `Ilość: ${itemProCounter}`;
    namePro.innerText = "Obroża CollarDog Pro";
    cenaProP.style.float = "left";
    cenaProP.style.marginRight = "50px";
    cenaProP.innerHTML = `${cenaPro * itemProCounter} ZŁ`;
    itemPro.appendChild(namePro);
    itemPro.appendChild(cenaProP);
    itemPro.appendChild(ilośćPro);
    przedmioty.appendChild(itemPro);
    itemPro.appendChild(minusButtonPro);
    itemPro.style.marginBottom = "20px";
  } else {
    console.log("Pro");
    itemProCounter += 1;
    ilośćPro.innerHTML = `Ilość: ${itemProCounter}`;
    cenaProP.innerHTML = `${cenaPro * itemProCounter} ZŁ`;
  }
});

minusButtonPro.addEventListener("click", () => {
  przedmioty.removeChild(itemPro);
  itemProCounter = 0;
  namePro.innerText = "";
  if (itemLiteCounter == 0 && itemProCounter == 0) {
    koszyk.classList.remove("koszyk-widoczny");
  }
});

payment.addEventListener("click", () => {
  alert("Dziękujemy za zamówienie !!!");
});
