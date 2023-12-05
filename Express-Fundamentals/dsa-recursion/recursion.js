/** product: calculate the product of an array of numbers. */

function product(nums) {
    return nums.reduce((acc, val) => acc*val, 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longest = 0;
  for(let word of words) {
    if(word.length > longest){
      longest =word.length
    }
  }
  return longest;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let everyOther = '';
  for(let i=0; i<str.length; i +=2) {
    everyOther += str[i]
  }
  return everyOther;

  }



/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let isPalindrome = str.split('').reverse().join('');
  return str === isPalindrome;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for (let i =0; i<arr.length;  i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split('').reverse().join('');

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringVal = [];
  for (let key of  obj){
    if(typeof obj[key] === 'string'){
      stringVal.push(obj[key]);
    }
  } return stringVal

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right =arr.length -1 ;
  while (left <= right){
    const mid = Math.floor((left + right) /2)
    const midVal = arr[mid];

    if (midVal ===val){
      return mid;
    } else if (midVal < val){
      left = mid + 1;
    } else {
      right = mid -1
    }
  }
  return -1

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
