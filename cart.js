function addItem(cart, item, quantity) {
    if (!Array.isArray(cart)) return [];
    // Early return if the item passed in does not have a .itemName & .quantity
    if (!("itemName" in item) || ("quantity" in item)) cart;

    cart.push({ itemName: item, quantity: quantity }); // Mutate array
    return cart; // Return mutated array
}

function removeItem(cart, target) {
    if (!Array.isArray(cart)) return []; // Check if we have an array
    if (!cart) return cart; // If the cart is empty, return the given array
    return cart.filter((item) => item.itemName !== target.itemName);
}

function getTotalItems(cart) {
    if (!cart || !Array.isArray(cart) === true) return 0; // Doesn't exist / not an array
    if (!cart.length) return 0; // Array (cart) as a length of 0
    if (!("quantity" in cart[0])) return 0; // Objects in array must have a particular property

    return cart.reduce((sum, currItem) => (sum += currItem.quantity), 0);
}

module.exports = { addItem, removeItem, getTotalItems };
