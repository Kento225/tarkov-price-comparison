export function createResult(item, resultsWrapper, resultsName, itemArray) {
  window[resultsName] = document.createElement("div");
  window[resultsName].classList.add(`${resultsName}`);
  const resultImg = document.createElement("img");
  resultImg.classList.add("resultImg");
  resultImg.src = item.gridImageLink;
  window[resultsName].textContent = item.name;
  let bColor = "";
  switch (item.backgroundColor) {
    case "black":
      bColor = "#ddd";
      break;
    case "red":
      bColor = "#2c1613";
      break;
    case "yellow":
      bColor = "#2a2a18";
      break;
    case "green":
      bColor = "#11180b";
      break;
    case "grey":
      bColor = "#141414";
      break;
    case "blue":
      bColor = "#172228";
      break;
    case "violet":
      bColor = "#211b26";
      break;
    case "orange":
      bColor = "#1e130b";
      break;
    case "default":
      bColor = "#313330";
      break;
  }

  window[resultsName].style.backgroundColor = bColor;
  bColor = "";
  window[resultsName].appendChild(resultImg);
  resultsWrapper.appendChild(window[resultsName]);

  window[resultsName].addEventListener("click", (e) => {
    itemArray.forEach((item) => {
      if (item.name === e.target.textContent) {
        console.log(item);
        const itemPrices = document.createElement("div");
        itemPrices.classList.add("item-prices");
        const fleaPrice = document.createElement("div");
        fleaPrice.textContent = `24hr Flea Average - fee = ${
          item.avg24hPrice - item.fleaMarketFee
        }`;
        itemPrices.appendChild(fleaPrice);
        resultsWrapper.innerHTML = "";
        resultsWrapper.style.height = "60px";
        resultsWrapper.appendChild(itemPrices);
      }
    });
  });
}
