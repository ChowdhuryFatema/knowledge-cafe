const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartTLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id)

    saveCartTLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart()
    const remainingCart = cart.filter(idx => idx !== id)
    saveCartTLS(remainingCart);
}

export {addToLS, getStoredCart, removeFromLS}