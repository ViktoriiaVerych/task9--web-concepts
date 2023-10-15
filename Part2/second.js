function multiply(x) {
    const multiplyHelper = (result) => (nextNum) => {
      if (nextNum === undefined) {
        return result;
      } else {
        return multiplyHelper(result * nextNum);
      }
    };
  
    return multiplyHelper(x);
  }
  
  module.exports = multiply;
  