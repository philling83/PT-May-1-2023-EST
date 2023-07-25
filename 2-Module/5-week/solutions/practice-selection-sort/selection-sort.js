function selectionSort(arr) {

  // Copy the original array
  arrCopy = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while (arrCopy.length > 0) {

    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for (let i = 1; i < arrCopy.length; i++) {
      if (arrCopy[i] < arrCopy[minIndex]) {
        minIndex = i;
      }
    }

    // Save and remove the value at the min index
    let minValue = arrCopy.splice(minIndex, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(minValue)
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {

    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;
    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let minValue = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = minValue;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
