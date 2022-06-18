function findRotationCount(arr, low=0, high=arr.length-1) {
  let mid = Math.floor((low+high)/2);

  if (arr[0] < arr[arr.length-1]) {
    return 0
  }
  if (arr[mid] < arr[mid-1]) {
    return mid
  }

  if (arr[mid] > arr[mid+1]) {
    return mid+1
  }

  return findRotationCount(arr, mid+1, high)

}


// expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
// expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
// expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)

module.exports = findRotationCount