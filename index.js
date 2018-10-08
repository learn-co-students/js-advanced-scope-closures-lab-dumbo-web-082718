function produceDrivingRange (tripRange) {
  return function (range1, range2) {
    let blockRange = Math.abs(parseInt(range1) - parseInt(range2));
    if (blockRange <= tripRange) {
      return `within range by ${tripRange - blockRange}`;
    } else {
      return `${blockRange - tripRange} blocks out of range`;
    }
  };
}

function produceTipCalculator (tipPercentage) {
  return function (fare) {
    return fare * tipPercentage;
  };
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
