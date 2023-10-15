const chai = require('chai');
const expect = chai.expect;
const getFactorial = require('./first'); 
const multiply = require('./second'); 

describe('getFactorial', () => {
  it('should return the factorial of a number', () => {
    expect(getFactorial(5)).to.equal(120);
  });

  it('should convert a string number and return the factorial', () => {
    expect(getFactorial('5')).to.equal(120);
  });

  it('should return "not a number" for invalid input', () => {
    expect(getFactorial('blabla')).to.equal('not a number');
  });
});

describe('multiply', () => {
  it('should multiply multiple numbers using currying', () => {
    expect(multiply(2)(3)(10)).to.equal(60);
    expect(multiply(-1)(677)(568)(2)).to.equal(-769072);
    expect(multiply(3)).to.equal(3);
  });
});
