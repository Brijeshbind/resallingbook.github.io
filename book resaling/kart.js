// Define an array to store the cart items
var cart = [];

// Function to add a product to the cart
function addToCart(name, price) {
    // Create an object to represent the product
    var item = {
        name: name,
        price: price
    };

    // Add the product to the cart array
    cart.push(item);

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    // Get a reference to the cart display element
    var cartDisplay = document.getElementById("cartDisplay");

    // Clear the cart display
    cartDisplay.innerHTML = "";

    // Loop through the cart items and display each one
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];

        // Create a new element to represent the item
        var itemElement = document.createElement("div");
        itemElement.innerHTML = item.name + " - $" + item.price;

        // Add the item element to the cart display
        cartDisplay.appendChild(itemElement);
    }
}