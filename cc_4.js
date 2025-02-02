//Task 1: Customer Discounts
//Declare a variable purchaseAmount with a value.
let purchaseAmount = 250;
//Use an if statement to apply a discount if the amount is greater than $100.
if (purchaseAmount > 100) {
    console.log("Congratulations!!! You are eligible for our discount offer.");
} else {
    console.log("Sorry, you are not eligible for our discount offer.");
}
//Log the final amount to the console using a template literal.
let discountRate = 0.2;
let finalAmount = purchaseAmount - (purchaseAmount * discountRate);
console.log(`The final amount after discount: $${finalAmount}`);