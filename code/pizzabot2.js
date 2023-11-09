const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const pizzaType = document.getElementById("pizzaType");
const pizzaQuantity = document.getElementById("pizzaQuantity");
const orderBtn = document.getElementById("orderBtn");
const orderTextEl = document.getElementById("orderText");

function order(e) {
  const orderName = pizzaType.value;
  const orderQuantity = pizzaQuantity.value;
  const orderTotal = orderQuantity * pizzaPrice;
  let cookingTime;

  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  const orderText =
    "Great, I'll get started on your " +
    orderName +
    " right away. It will take approximately " +
    cookingTime +
    " minutes to cook, and it will cost " +
    orderTotal +
    " kr";
  orderTextEl.textContent = orderText;
}

orderBtn.addEventListener("click", order);
