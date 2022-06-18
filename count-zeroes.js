function countZeroes(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex < rightIndex) {
    let midIndex = Math.floor((rightIndex + leftIndex) / 2);
    let midValue = array[midIndex];

    if (midValue == 0) {
        rightIndex = midIndex - 1;

    } else {
        leftIndex = midIndex + 1;
    }
  }
  if (array[leftIndex] == 0) {
      return array.length - leftIndex
  } else {
      return array.length - 1 - leftIndex
  }
}

module.exports = countZeroes