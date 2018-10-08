function produceDrivingRange(blockRange){
  return function(block1, block2){
    const delta = Math.abs(Number(block1.slice(0,2))-Number(block2.slice(0,2)));
    if (delta > blockRange) {
      return `${delta-blockRange} blocks out of range`;
    }else if (blockRange >= delta) {
      return `within range by ${blockRange-delta}`
    }
  }
}

function produceTipCalculator(tip){
  return function(total){
    return total*tip;
  };
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = driverId;
      driverId++;
    }
  }
}
