const { addToCart, removeFromCart, calculateCartTotal }

const cart = [
];

// function to add product to cart 
function addToCart(product) {

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.productId === product.productId);

    if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        // Otherwise, add the product to the cart
        cart.push(product);
    }
};

// function to remove product from cart
function removeFromCart(productId) {

    //Find the index of the product in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
        // Remove if the product exists in the cart
        cart.splice(productIndex, 1);
    }
};

function calculateCartTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    return total;
};



module.exports = { 
    addToCart,
    removeFromCart,
    calculateCartTotal
};