const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  //!!START SILENT
  sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addNums(n));
  }

  return sums;
  //!!END
  //!!ADD
  // // Fill this in

  //!!END_ADD
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  //!!START SILENT
  sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addManyNums(n));
  }

  return sums;
  //!!END
  //!!ADD
  // // Fill this in

  //!!END_ADD
}

module.exports = [addNums10, addManyNums10];
