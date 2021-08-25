const { expect } = require('@jest/globals')
const squareArray = require('./squareArray.js')

describe ('squared array test suite', function() {
    test('Should retun new array', function() {
        let array = new Array()
        expect(squareArray(array)).not.toBe(array)
    }),
    test('Empty array returns empty array', function() {
        expect(squareArray([])).toEqual([])
    }),
    test('[0,1,2,3] returns [0,1,4,9]', function() {
        expect(squareArray([0,1,2,3])).toEqual([0,1,4,9])
    }),
    test('[-3,-2,-1,0,1,2,3] returns [0,1,1,4,4,9,9]', function(){
        expect(squareArray([-3,-2,-1,0,1,2,3])).toEqual([0,1,1,4,4,9,9])
    })
})
