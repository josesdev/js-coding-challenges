//Given two strings s and t, return true if t is an anagram of s, and false 
//otherwise. 
//
// An Anagram is a word or phrase formed by rearranging the letters of a 
//different word or phrase, typically using all the original letters exactly once. 
//
// 
// Example 1: 
// Input: s = "anagram", t = "nagaram"
//Output: true
// 
// Example 2: 
// Input: s = "rat", t = "car"
//Output: false
// 
// 
// Constraints: 
//
// 
// 1 <= s.length, t.length <= 5 * 10⁴ 
// s and t consist of lowercase English letters. 
// 
//
// 
// Follow up: What if the inputs contain Unicode characters? How would you 
//adapt your solution to such a case? 
//
// Related Topics Hash Table String Sorting 👍 9172 👎 286


//leetcode submit region begin(Prohibit modification and deletion)

function haveSameLength(s, t) {
    return s.length === t.length;
}

function getObjectWithLetters(arr) {
    let output = {};
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];

        if (output[letter] === undefined) {
            output[letter] = 1;
        }
        else {
            output[letter]++;
        }
    }
    return output;
}

function containSameLetters(obj1, obj2) {
    let output = true;

    let obj1Letters = Object.keys(obj1);
    for (let i = 0; i < obj1Letters.length; i++) {
        let letter = obj1Letters[i];
        if (obj1[letter] !== obj2[letter]) {
            output = false;
            break;
        }
    }
    return output;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (!haveSameLength(s, t)) {
        return false;
    }

    sArr = Array.from(s);
    sObj = getObjectWithLetters(sArr);

    tArr = Array.from(t);
    tObj = getObjectWithLetters(tArr);

    return containSameLetters(sObj, tObj);
};
//leetcode submit region end(Prohibit modification and deletion)
