const { addToCart, removeFromCart, calculateCartTotal } = require('../routes/cart');

describe('Cart Functionality', () => {
    let cart;
  
    beforeEach(() => {
      cart = [];
    });
  
    test('Adding a product to the cart', () => {
      const product = { productId: 1, quantity: 2 };
      addToCart(product);
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(1);
      expect(cart[0].quantity).toBe(2);
    });
  
    test('Removing a product from the cart', () => {
      const product = { productId: 1, quantity: 2 };
      addToCart(product);
      expect(cart.length).toBe(1);
      removeFromCart(1);
      expect(cart.length).toBe(0);
    });
  
    test('Calculating the cart total', () => {
      const product1 = { productId: 1, price: 10, quantity: 2 };
      const product2 = { productId: 2, price: 20, quantity: 1 };
      addToCart(product1);
      addToCart(product2);
      const total = calculateCartTotal();
      expect(total).toBe(40); // (10 * 2) + (20 * 1) = 40
    });
  });