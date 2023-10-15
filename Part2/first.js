function getFactorial(n) {
    const num = parseInt(n);
  
   
    if (num === 0) {
      return 1;
    }
    
    if (!Number.isNaN(num) && num > 0) {
      return num * getFactorial(num - 1);
    } else {
      return 'not a number';
    }
  }
  
  module.exports = getFactorial;
  