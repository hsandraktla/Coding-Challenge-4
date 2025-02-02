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


//Task 2: Sales Report
//Declare an array sales with at least five sales figures.
let sales =[100, 250, 150, 300, 200];
//Use a for loop to calculate the total sales.
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
//Log the total sales to the console using a template literal.
console.log(`Total Sales: $${totalSales}`);


//Task 3: Inventory Depletion
//Declare a variable stock with an initial value of 10.
let stock = 10;
//Use a while loop to decrease stock until it reaches zero.
while (stock > 0) {
    console.log(`Stock Remaining: ${stock}`);
    stock--; //decrement count by 1
}
//Log each decrement to the console using a template literal.
console.log("Out of Stock!!!");


//Task 4: Customer Survey
//Declare a variable responses with an initial value of zero.
let responses = 0;
//Use a do...while loop to collect responses, simulating user input with responses++ until it reaches 3.
do {
    console.log(`Response Count: ${responses}`);
    responses++;
} while (responses < 3);
//Log each response count to the console using a template literal.
console.log("Thanks for Your Feedback!");

