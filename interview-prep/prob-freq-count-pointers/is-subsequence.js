// add whatever parameters you deem necessary
function isSubsequence(sub, str) {
    let subIndex = 0; // Index for the subsequence string
    let strIndex = 0; // Index for the main string
    while (strIndex < str.length) {
        if (sub[subIndex] === str[strIndex]) {
            subIndex++; // Move to the next character in the subsequence
        }
        if (subIndex === sub.length) {
            return true; 
        }
        strIndex++;
    }
    return false; // Not all characters were found in order
}

