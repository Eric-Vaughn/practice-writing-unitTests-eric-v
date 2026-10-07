function addItem(cart, item, quantity) {
    cart.push({ itemName: item, quantity: quantity });
    return cart;
}

function removeItem(cart, item) {
    // If the cart is empty, return an empty array
    if (!cart) return [];
    return cart.filter((item) => item.itemName !== item.itemName);
}

function getTotalItems(cart) {
    return cart.reduce((sum, currItem) => (sum += currItem.quantity), 0);
}

module.export = { addItem, removeItem, getTotalItems };
