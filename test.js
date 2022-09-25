// export functions
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Start testing
test('Suma de 14 + 9 es igual a 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test('100 USD = 10658.33 YEN', () => {
    let total = fromDollarToYen(100);
    expect(total).toBe(10658.33);
});
test("1 EUR = 1.206 USD", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});
test("1000 JPY = 6.25 GBP", function(){
    expect(fromYenToPound(1000)).toBe(6.25);
});