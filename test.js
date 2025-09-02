// Importacion de las funciones
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

/////////////////////prueba EUR > USD//////////////////////

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


////////////////////// prueba USD > JPY////////////////////////
test("One dollar should be 146.26 yens", function() {
    // Transformar de dolares a euros: 1 ÷ 1.07
    // Luego transformar de euros a yenes: EUR × 156.5
    const yens = fromDollarToYen(1);
    //regla de 3
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})









