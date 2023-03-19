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

const checkoutCart = async () => {

    const response = await fetch(`/api/item`, {
        method: 'DELETE',
    });

    if (response.ok) {
        //alert('Removed from cart.');
        //location.reload();
    } else {
        alert('Failed to delete cart.');
    }
}

if(document.querySelector('.cart-btn')){
    const buttons = document.querySelectorAll('.cart-btn');
    buttons.forEach((post) => {
        post.addEventListener('click', function eventHandler(event) {
            removeFromCart(event);
        });
    });
}

if(document.querySelector('#checkout')){
    document.querySelector('#checkout').addEventListener('click', checkoutCart);
}
