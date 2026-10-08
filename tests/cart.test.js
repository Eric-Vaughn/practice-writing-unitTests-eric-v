const cart = require("../cart.js");

let testCart = [];

beforeEach(() => {
    testCart = [
        { itemName: "apple", quantity: 2 },
        { itemName: "banana", quantity: 1 },
        { itemName: "pineapple", quantity: 1 },
        { itemName: "lemon", quantity: 5 },
    ];
});

// TODO:
describe("addItem", function () {
    // Positive
    test("valid item has been added successfully", function () {
        expect(cart.addItem({ itemName: "carrot", quantity: 4 })).toBe(
            { itemName: "apple", quantity: 2 },
            { itemName: "banana", quantity: 1 },
            { itemName: "pineapple", quantity: 1 },
            { itemName: "lemon", quantity: 5 },
            { itemName: "carrot", quantity: 4 },
        );
    });

    // Negative
    test("invalid item has not been added", function () {
        expect(cart.addItem({ itemName: "carrot" })).toBe(
            { itemName: "apple", quantity: 2 },
            { itemName: "banana", quantity: 1 },
            { itemName: "pineapple", quantity: 1 },
            { itemName: "lemon", quantity: 5 },
        );
    });

    // Edge
    test("", function () {
        expect().toBe();
    });
});

describe("removeItem", function () {
    // Positive
    test("", function () {
        expect().toBe();
    });

    // Negative
    test("", function () {
        expect().toBe();
    });

    // Edge
    test("", function () {
        expect().toBe();
    });
});

describe("getTotalItems", function () {
    // Positive
    test("", function () {
        expect().toBe();
    });

    // Negative
    test("", function () {
        expect().toBe();
    });

    // Edge
    test("", function () {
        expect().toBe();
    });
});
