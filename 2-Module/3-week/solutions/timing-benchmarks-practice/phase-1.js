// Adds up positive integers from 1-n
function addNums(n) {
  //!!START SILENT
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
  //!!END
  //!!ADD
  // // Fill this in

  //!!END_ADD
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  //!!START SILENT
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += addNums(i);
  }
  return total;
  //!!END
  //!!ADD
  // // Fill this in

  //!!END_ADD
}



module.exports = [addNums, addManyNums];