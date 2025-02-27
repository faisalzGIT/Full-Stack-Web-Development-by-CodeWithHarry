// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
// Function to filter products based on a criterion
function filterProducts(products, criterion) {
    return products.filter(product => {
        // Check if the product matches the criterion
        for (let key in criterion) {
            if (product[key] !== criterion[key]) {
                return false; // If any criterion does not match, exclude this product
            }
        }
        return true; // All criteria match, include this product
    });
}

// Example usage
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
    { id: 3, name: "T-shirt", category: "Clothing", price: 20 },
    { id: 4, name: "Blender", category: "Appliances", price: 100 }
];

const criterion = { category: "Electronics" }; // Filter for electronics products

const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts);