function findFloor(arr, num, low=0, high=arr.length - 1) {

    if (num >= arr[high]) {
        return arr[high]
    }
    if (num < arr[0]) {
        return -1
    }

    let mid = Math.floor((low + high)/2);

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    }
    if (arr[mid] === num) {
        return arr[mid];
    } else if (arr[mid] > num) {
        return findFloor(arr, num, low, mid-1);
    } else {
        return findFloor(arr, num, mid+1, high);
    }


}

module.exports = findFloor