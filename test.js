// const  {sum} = require("./app.js")

// test("adds 14+9 to equal 23", () => {
    //     let total = sum(14,9)
    //     expect(total).toBe(23)
    // })
    

test("3.5 Euros should be 4.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("5 dollars should be 532.9 yen", function(){

    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(5)

    const expected = (5 / 1.2) * 127.9;

     expect(fromDollarToYen(5)).toBe(expected);
})

test("5000 yen should be 31.27 pounds", function(){

    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(5000)

    const expected = (5000 / 127.9) * 0.8;

     expect(pounds).toBe(expected);
})