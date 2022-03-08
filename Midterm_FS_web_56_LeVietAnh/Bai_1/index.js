/*
### Bài  1 - Valid Parentheses (15đ)

Give a string **`s`** containing just the character **`'(',  ')' ,  '{' ,  '}' ,  '['  and ']'`**, 
determine if the input string is valid.
An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Example 1:
Input: s = "()";
Output: true;

Example 2:
Input: s = "()[]{}";
Output: true;

Example 3: 
Input: s = "([}"
Output: false;
*/

// algo
/*
1. we can use a stack, everytime we see an open char ( { [ we just add its close char to the stack.
2. if we see a close char, compare it with the stack and pop it out.
    if it's the same with stack, continue;
    else return false
3. continue till the end of string;
*/

function validParenthesis(str) {
    // O(n) where n is str.length;
    let pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{")
            stack.push(pairs[str[i]]);
        else {
            if (stack[stack.length - 1] === str[i]) stack.pop();
            else return false;
        }
    }

    return true;
}
console.log(validParenthesis("()"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("([}"));
