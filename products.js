// Get references to the cards
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
// Repeat for other cards as needed

// Add event listeners to the cards
card1.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    window.location.href = 'cart.html?product=' + productId; // Redirect to cart.html with product ID
});

card2.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    window.location.href = 'cart.html?product=' + productId; // Redirect to cart.html with product ID
});

// Repeat for other cards as needed
