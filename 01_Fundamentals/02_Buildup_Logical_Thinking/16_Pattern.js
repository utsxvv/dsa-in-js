/*
Pattern-16: Alpha-Ramp Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

A
B B
C C C
D D D D
E E E E E

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

A
B B
C C C

Input: N = 6
Output:

A
B B
C C C
D D D D
E E E E E
F F F F F F

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let rows = "";
            for (let j = 0; j <= i; j++) {
                rows += String.fromCharCode(65 + i) + " ";
            }
            console.log(rows);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
