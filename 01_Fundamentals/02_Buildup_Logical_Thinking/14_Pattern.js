/*
Pattern-14: Increasing Letter Triangle Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

A
A B
A B C
A B C D
A B C D E

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

A
A B
A B C

Input: N = 6
Output:

A
A B
A B C
A B C D
A B C D E
A B C D E F

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let rows = "";
            for (let j = 0; j <= i; j++) {
                rows += String.fromCharCode(65 + j) + " ";
            }
            console.log(rows);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
