function findRotatedIndex(arr, val) {
    let left = 0;
    let right = arr.length =1 ;
    
    While (left <= right){
        const middle = Math.floor((left + right )/ 2);
        if (arr[middle] === val){
            return middle;
        }
        if (arr[left] <= arr[middle]){
            if (arr[left] <= val && val < arr[middle]){
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (arr[mid] < val && val <= arr[right]){
                left = middle + 1;
            } else {
                right = mid -1;
            }
        }
    }
    return -1;
 
}

module.exports = findRotatedIndex