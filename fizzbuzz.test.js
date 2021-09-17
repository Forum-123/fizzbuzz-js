let testFuncs = require("./fizzbuzz.js")

describe(".fizzFunc", () => {

    test.each(
        [15])('.when parsed a num multiple of 3 & 5 should return FizzBuzz', (a) => {
            let result = testFuncs.fizzFunc(a)
            expect(result).toEqual("FizzBuzz")
        })

    test.each(
        [3])('.when parsed a num multiple of 3 should return Fizz', (a) => {
            let result = testFuncs.fizzFunc(a)
            expect(result).toEqual("Fizz")
        })

    test.each(
        [10])('.when parsed a num multiple of 5 should return Buzz', (a) => {
            let result = testFuncs.fizzFunc(a)
            expect(result).toEqual("Buzz")
        })


})