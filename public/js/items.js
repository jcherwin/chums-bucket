const addToCart = async (event) => {

    const btnId = event.target.getAttribute('id');
    console.log(btnId);


    const response = await fetch(`/api/item/${btnId}`, {
    method: 'GET',
    });

    if (response.ok) {
    alert('Added to cart.');
    } else {
    alert('Failed to add to cart.');
    }
};

const buttons = document.querySelectorAll('.cart-btn');
buttons.forEach((post) => {
    post.addEventListener('click', function eventHandler(event) {
        addToCart(event);
    });
});