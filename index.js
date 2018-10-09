function produceDrivingRange (limit) {
  return function (num1, num2) {
    let range = Math.abs(num1.slice(0, 2) - num2.slice(0, 2));
    if (range > limit) {
      return `${range - limit} blocks out of range`;
    } else if (range < limit) {
      return `within range by ${limit - range}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function (bill) {
    return percentage * bill;
  }
}


function createDriver (driver) {
  let count = 0;
  return class Driver {
    constructor (name) {
      this.name = name;
      this.id = count ++;
    }
  }
}
