const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    " , " +
    hawaiian +
    " and " +
    pepperoni
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);
if (
  orderName === vegetarian ||
  orderName === hawaiian ||
  orderName === pepperoni
) {
  alert("Great choice! We have that pizza on the menu.");

  const orderQuantity = prompt("How many of " + orderName + " do you want?");
  const orderTotal = orderQuantity * pizzaPrice;

  let cookingTime;

  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }

  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away. It will take approximately " +
      cookingTime +
      " minutes to cook, and it will cost " +
      orderTotal +
      " kr"
  );
} else {
  alert("Sorry, we don't have that sort of pizza on the menu.");
}
