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


//Task 5: Employee Information
//Declare an object employee with properties: { name: "Alice", position: "Manager", salary: 75000 }.
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};
//Use a for...in loop to iterate through the object properties.
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`); //Log each property and value to the console using a template literal.
};


//Task 6: Product Listings
//Declare an array products with at least three product names.
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Charger"];
//Use a for...of loop to display each product.
for (let product of products) {
    console.log(`Product Name: ${product}`); //Log each product name to the console using a template literal.
};


//Task 7: Order Processing
//Declare an array orders with at least three order IDs.
let orders = [101, 102, 103, 104, 105];
//Use the forEach() method to log each order ID to the console using a template literal.
orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});


//Task 8: Tax Calculation
//Write a function calculateTax that takes an amount and tax rate.
let amount = 1000;
let taxRate = 0.1;
function calculateTax(amount, taxRate) {
    return amount * taxRate; //Return the calculated tax.
}
//Log the result to the console using a template literal.
console.log(`Tax Amount: $${calculateTax(amount, taxRate)}`);


//Task 9: Discount Application
//Declare a function expression applyDiscount that takes a price and discount percentage.
const applyDiscount = function(price, discountPercentage) {
    return price - (price * discountPercentage); //Return the discounted price.
};
//Log the result to the console using a template literal.
let discountedPrice = applyDiscount(2000, 0.1);
console.log(`Discounted Price: $${discountedPrice}`);


//Task 10: Loyalty Points
//Write an arrow function calculatePoints that takes a purchase amount and returns points earned (1 point per $10 spent).
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount/10);
//Log the result to the console using a template literal.
let pointsEarned = calculatePoints(150);
console.log(`You have earned ${pointsEarned} points from this purchase.`);