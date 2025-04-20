// Cart functionality for the website
const cart = function () {
    // Cart modal functionality
    const cartBtn = document.querySelector('.button-cart');

    // select the open cart modal
    const cart = document.getElementById('modal-cart');

    // Select the close button inside the cart modal
    const closeBtn = cart.querySelector('.modal-close');

    // console.log(cart);

    // Show cart when the button is clicked
    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex';
    });

    // Hide cart when the close button is clicked
    closeBtn.addEventListener('click', function () {
        cart.style.display = '';
    });
}

cart();