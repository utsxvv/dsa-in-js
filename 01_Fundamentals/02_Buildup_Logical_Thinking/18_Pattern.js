/*
Pattern-18: Alpha-Triangle Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

E
D E
C D E
B C D E
A B C D E

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

C
B C
A B C

Input: N = 6
Output:

F
E F
D E F
C D E F
B C D E F
A B C D E F


*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let rows = "";
            for (let j = 0; j <= i; j++) {
                rows += String.fromCharCode(65 + N - 1 - i + j) + " ";
            }
            console.log(rows);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
