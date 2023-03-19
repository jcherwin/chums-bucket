const removeFromCart = async (event) => {

    const btnId = event.target.getAttribute('id');
    console.log(btnId);

    const response = await fetch(`/api/item/${btnId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        //alert('Removed from cart.');
        location.reload();
    } else {
        alert('Failed to remove from cart.');
    }
};

const buttons = document.querySelectorAll('.cart-btn');
buttons.forEach((post) => {
    post.addEventListener('click', function eventHandler(event) {
        removeFromCart(event);
    });
});