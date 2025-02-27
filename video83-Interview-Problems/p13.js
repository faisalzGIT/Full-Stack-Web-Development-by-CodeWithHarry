// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
// Function to calculate the total cost of items in the shopping cart
function calculateTotal(products) {
    return products.reduce((total, product) => {
        // Add the cost of the current product (price * quantity) to the total
        return total + (product.price * product.quantity);
    }, 0); // Initialize total to 0
}

// Example usage
const cart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Smartphone", price: 800, quantity: 2 },
    { name: "T-shirt", price: 20, quantity: 3 }
];

const totalCost = calculateTotal(cart);
console.log("Total Cost:", totalCost);
