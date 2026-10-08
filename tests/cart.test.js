const cart = require("../cart.js");

let globalTestCart = [];

beforeEach(() => {
    // Always reset our gobal test variable(s)
    globalTestCart = [
        { itemName: "apple", quantity: 2 },
        { itemName: "banana", quantity: 1 },
        { itemName: "pineapple", quantity: 1 },
        { itemName: "lemon", quantity: 5 },
    ];
});

// addItem()
describe("addItem", function () {
    // Positive
    test("valid item has been added successfully", function () {
        const newItem = { itemName: "carrot", quantity: 4 };
        const expectedCart = [
            { itemName: "apple", quantity: 2 },
            { itemName: "banana", quantity: 1 },
            { itemName: "pineapple", quantity: 1 },
            { itemName: "lemon", quantity: 5 },
            { itemName: "carrot", quantity: 4 },
        ];

        expect(cart.addItem(newItem)).toBe(expectedCart);
    });

    // Negative
    test("invalid item has not been added", function () {
        const newBadItem = { itemName: "carrot" };

        expect(cart.addItem(newBadItem)).toBe(globalTestCart);
    });

    // Edge
    test("given an empty object (item), return the unchanged array (cart)", function () {
        expect(cart.addItem({})).toBe(globalTestCart);
    });
});

// removeItem()
describe("removeItem", function () {
    // Positive
    test("valid item has been removed successfully", function () {
        const targetItem = { itemName: "banana", quantity: 1 };
        const resultingCart = [
            { itemName: "apple", quantity: 2 },
            { itemName: "pineapple", quantity: 1 },
            { itemName: "lemon", quantity: 5 },
        ];

        expect(cart.removeItem(targetItem)).toBe(resultingCart);
    });

    // Negative
    test("invalid item has not been removed", function () {
        const invalidItem = { id: "banana", quantity: 1 };

        expect(cart.removeItem(invalidItem)).toBe(globalTestCart);
    });

    // Edge
    test("item to be removed doesn't exist, no change", function () {
        const carrot = { itemName: "carrot", quantity: 4 };

        expect(cart.removeItem(carrot)).toBe(globalTestCart);
    });
});

// getTotalItems()
describe("getTotalItems", function () {
    // Positive
    test("a valid cart's total number of items have been summed properly", function () {
        const totalGlobalCartQuant = globalTestCart.reduce(
            (sum, currItem) => (sum += currItem.quantity),
            0,
        );

        expect(cart.getTotalItems(globalTestCart)).toBe(totalGlobalCartQuant);
    });

    // Negative
    test("an invalid cart's total number of items is 0", function () {
        const invalidCart = globalTestCart.map((item) => ({
            itemName: item.itemName,
            id: item.quantity, // Property CAN'T be called "id"
        }));

        expect(cart.getTotalItems(invalidCart)).toBe(0);
    });

    // Edge
    test("an empty cart's total number of items is 0", function () {
        expect(cart.getTotalItems([])).toBe(0);
    });
});
