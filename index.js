function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let blocks = Math.abs(parseInt(startBlock) - parseInt(endBlock));
    if(blocks > blockRange) {
      let outOfRange = blocks - blockRange;
      if (blocks <= 1) {
        outOfRangeResult = `${outOfRange} block`;
      } else {
        outOfRangeResult = `${outOfRange} blocks`;
      }
      return outOfRangeResult += " out of range";
    } else {
      let withinRange = blockRange - blocks;
      return result = `within range by ${withinRange}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(tripCost) {
    return percentage * tripCost;
  }
}

function createDriver(name) {
  var driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
