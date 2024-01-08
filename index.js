import { createResult } from "./functions.js";

const fields = document.querySelector(".fields");
let itemArray = [];
const field1 = document.querySelector("#field1");
const field2 = document.querySelector("#field2");
field1.value = "";
field2.value = "";
const field1Div = document.querySelector(".field1");
const field2Div = document.querySelector(".field2");

const field1Results = document.createElement("div");
const field2Results = document.createElement("div");

fetch("https://api.tarkov.dev/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: `{
    items {
        name
        shortName
        gridImageLink
        backgroundColor
         fleaMarketFee
    avg24hPrice
  	sellFor {
  	  price
  	  currency
  	  priceRUB
  	  source
  	}
    }
}`,
  }),
})
  .then((r) => r.json())
  .then((data) => {
    data.data.items.forEach((element) => {
      itemArray.push(element);
    });
    const colorArray = [];
    itemArray.forEach((item) => {
      if (!colorArray.includes(item.backgroundColor)) {
        colorArray.push(item.backgroundColor);
        colorArray.push(item);
      }
    });
    fields.style.display = "flex";
  });

field1.addEventListener("input", (e) => {
  const fieldData = field1.value.toLowerCase();
  if (fieldData.length < 3) {
    return;
  }
  field1Results.innerHTML = "";
  field1Results.classList.add("field1-results");
  field1Div.appendChild(field1Results);

  itemArray.forEach((item) => {
    const itemName = item.name.toLowerCase();
    if (itemName.includes(fieldData)) {
      createResult(item, field1Results, "result1", itemArray);
    }
  });
});
field2.addEventListener("input", (e) => {
  const fieldData = field2.value.toLowerCase();
  if (fieldData.length < 3) {
    return;
  }
  field2Results.innerHTML = "";
  field2Results.classList.add("field1-results");
  field2Div.appendChild(field2Results);

  itemArray.forEach((item) => {
    const itemName = item.name.toLowerCase();
    if (itemName.includes(fieldData)) {
      createResult(item, field2Results, "result2", itemArray);
    }
  });
});
