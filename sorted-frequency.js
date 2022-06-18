function sortedFrequency(array, val) {
    let leftIndex = 0;
    let rightIndex = array.length - 1
    let midIndex = Math.floor((rightIndex + leftIndex) / 2);
    // let leftMid = Math.floor((rightIndex + leftIndex) / 2);
    // let rightMid = Math.floor((rightIndex + leftIndex) / 2);

    // if array is outside range of array, return -1
    if (array[rightIndex] < val) {
        return -1
    }

    if (array[0] > val) {
        return -1
    }

    // find highest index of val
    while (array[rightIndex] != val) {
        console.log('finding highest index')
        let midValue = array[midIndex];
        console.log('midValue: ', midValue);
        console.log('target val: ', val)
        console.log('rightIndex: ', array[rightIndex])
        if (midValue > val) {
            rightIndex = midIndex - 1;
            midIndex = Math.floor((midIndex + leftIndex)/2);
        } else {
            midIndex = Math.ceil((midIndex + rightIndex)/2);
            console.log('new midValue: ', array[midIndex])
        }
    }

    // reset midIndex
    midIndex = Math.floor((rightIndex + leftIndex) / 2);

    // find lowest index of val
    while (array[leftIndex] != val) {
        console.log('finding lowest index')
        let midValue = array[midIndex];
        if (midValue < val) {
            leftIndex = midIndex +1;
            midIndex = Math.floor((midIndex + rightIndex)/2)
        } else {
            midIndex = Math.ceil((midIndex + leftIndex) /2)
        }
    }

    // return difference + 1
    console.log(rightIndex - leftIndex +1)
    return rightIndex - leftIndex + 1;

}

module.exports = sortedFrequency