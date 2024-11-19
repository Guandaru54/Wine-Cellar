// Cart variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;
const prices = {
    'Rose Wine': 11600,
    'Chardonnay': 4500,
    'Rich Merlot': 5200,
    'Elegant Prosecco': 8900,
    'Sangiovese': 4200,
    'Pinot Noir': 7000,
    'Nebbiolo': 7500,
    'Syrah': 5600,
    'Sauvignon Blanc': 9500
};

// Function to add item to the cart
function addToCart(wineName) {
    cart.push(wineName);
    cartCount++;
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    document.getElementById('cart-count').textContent = cartCount;
    alert(wineName + " has been added to your cart.");
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += prices[item];
    });
    return total;
}

// Function to display the cart contents on the cart page
function displayCart() {
    const cartDisplay = document.getElementById('cart-display');
    const total = calculateTotal();
    if (cart.length === 0) {
        cartDisplay.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let cartDetails = `
            <h3>Your Cart</h3>
            <ul>
                ${cart.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p><strong>Total: Ksh ${total}</strong></p>
            <button onclick="placeOrder()">Place Order</button>
        `;
        cartDisplay.innerHTML = cartDetails;
    }
}

// Function to handle the place order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to your cart before placing an order.");
        return;
    }

    const total = calculateTotal();
    alert(`Your total is Ksh ${total}. Order placed successfully!`);

    // Reset cart after placing order
    cart = [];
    cartCount = 0;
    localStorage.removeItem('cart'); // Clear cart from localStorage
    document.getElementById('cart-count').textContent = cartCount;
    window.location.href = "index.html"; // Redirect to the home page
}
