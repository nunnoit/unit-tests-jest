let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const sum = (a,b) => {
    return a + b
}
// console.log(sum(7,3))

const fromDollarToYen = (cantidad) => {
    cantidad = cantidad / oneEuroIs.USD;
    cantidad = cantidad * oneEuroIs.JPY;
    cantidad = cantidad.toFixed(2);
    cantidad = parseFloat(cantidad);
    return cantidad;
}
const fromEuroToDollar = (cantidad) => {
    cantidad = cantidad * oneEuroIs.USD;
    return cantidad;
}
const fromYenToPound = (cantidad) => {
    cantidad = cantidad/oneEuroIs.JPY ;
    cantidad = cantidad*oneEuroIs.GBP;
    cantidad = cantidad.toFixed(2);
    cantidad = parseFloat(cantidad); 
    return cantidad;
    }

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };