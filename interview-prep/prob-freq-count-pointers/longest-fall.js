// add whatever parameters you deem necessary
function longestFall(nums) {
    if (nums.length <= 1) return 0; 
    let maxLength = 0;  // To store the maximum length of a decline
    let currentLength = 0;  // To store the current length of a decline
    let wasFalling = false; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
        if (wasFalling) {
            currentLength++;
        } else {
            currentLength = 2;
            wasFalling = true; 
        }
    } else if (nums[i] > nums[i - 1]) {
        maxLength = Math.max(maxLength, currentLength);
            currentLength = 0;  // Reset current fall length
            wasFalling = false;  // No longer in a falling sequence
        }
    }
    maxLength = Math.max(maxLength, currentLength);

    return maxLength;

}