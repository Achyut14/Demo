// add whatever parameters you deem necessary
function countPairs(numbers, targetSum) {
    let count = 0;
    const seen = new Map(); 
    // Iterate through each number in the array
    for (let number of numbers) {
        const complement = targetSum - number;
    // Check if the complement is already in the map
        if (seen.has(complement)) {
            count += seen.get(complement)
        }
    // Update the count of this number in the map
        seen.set(number, (seen.get(number) || 0) + 1);
    }
    return count;
}
