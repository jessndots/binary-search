function findRotatedIndex(array, val) {  // [3,4,1,2], 4
    let rightIndex = array.length - 1; // 3
    let leftIndex = 0; // 0
    let rotIndex = Math.floor((rightIndex + leftIndex)/2); // 1

    // find rotated index
    while(array[rotIndex] >= array[rotIndex - 1]) { // while 4 >= 3 // while 1 >= 4 false, loop ends
        if (array[leftIndex] > array[rotIndex]) { // if 3 > 4 => no
            // [6,7,8,9,1,2,3,4,5]
            rightIndex = rotIndex;
            rotIndex = Math.floor((leftIndex + rightIndex)/2);
        } else if (array[leftIndex] < array[rotIndex]) { // if 3 < 4
            leftIndex = rotIndex; // = 1
            rotIndex = Math.floor((leftIndex + rightIndex)/2) // = 2
        }
    }

    // reset right and left index
    rightIndex = array.length - 1; // = 3
    leftIndex = 0; // 0
    let valIndex = rotIndex; // 2
    
    console.log(parseInt(val.toString(), 10));
    console.log(parseInt(array[valIndex].toString(), 10))
    
    
    while (parseInt(val.toString(), 10) != parseInt(array[valIndex].toString(), 10)) { // while 1 != 4 true // while 4 != 4 false, loop ends
        if (parseInt(val.toString(), 10) > parseInt(array[rightIndex].toString(), 10)) { // if 4 > 2 true
            rightIndex = valIndex; // = 2
        } else if (parseInt(val.toString(), 10) < parseInt(array[rightIndex].toString(), 10)) { // if 4 < 2 false
            leftIndex = valIndex;
        } else {
            return rightIndex
        }
        valIndex = Math.floor((rightIndex + leftIndex)/2); // = 1
        
    }

    return valIndex // = 1
}

module.exports = findRotatedIndex