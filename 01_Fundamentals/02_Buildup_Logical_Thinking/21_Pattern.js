/*
Pattern-21: Hollow Rectangle Pyramid
#Easy

Problem Statement: Given an integer N, print the following pattern.

* * * * *
*       *
*       *
*       *
*       *
* * * * *

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

* * *
*   *
* * *

Input: N = 6
Output:

* * * * * *
*         *
*         *
*         *
*         *
*         *
* * * * * *

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j < N; j++) {
                if (i == 0 || j == 0 || i == N - 1 || j == N - 1) {
                    row += "* ";
                } else {
                    row += "  ";
                }
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
