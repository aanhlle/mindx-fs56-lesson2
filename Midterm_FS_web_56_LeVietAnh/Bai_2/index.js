/*
Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1] // n = 8
Output: [5,6]

Example 2:`
Input: nums = [1,1]
Output: [2]
*/

// algo
/*
a brute force solution is for each number 1~n, we find them in the nums arr,
add the missing number to output.
time: O(n^2), space: O(1)

we can use a seen dict to map each number. Everytime we see a char, mark them as seen.
continue till the end off nums array.
The output would be the all the unseen number in the dict;
time: O(n) , space O(n) for the dict
*/

function findMissingNums(nums) {
    let dict = new Array(nums.length + 1).fill(0); //in this implementation we use array, accessing array element is O(1)
    let output = [];
    dict[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = 1;
    }

    for (let i = 0; i < dict.length; i++) {
        if (dict[i] === 0) output.push(i);
    }

    return output;
}

console.log(findMissingNums([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findMissingNums([1, 1]));
