/*
Pattern-19: Symmetric-Void Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *
*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

* * * * * *
* *     * *
*         *
*         *
* *     * *
* * * * * *

Input: N = 6
Output:

* * * * * * * * * * * *
* * * * *     * * * * *
* * * *         * * * *
* * *             * * *
* *                 * *
*                     *
*                     *
* *                 * *
* * *             * * *
* * * *         * * * *
* * * * *     * * * * *
* * * * * * * * * * * *


*/

class Solution {
    printPattern(N) {
        let space = 0;

        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j < N - i; j++) {
                row += "* ";
            }
            for (let j = 0; j < space; j++) {
                row += "  ";
            }
            for (let j = 0; j < N - i; j++) {
                row += "* ";
            }
            space += 2;
            console.log(row);
        }

        space = 2 * N - 2;
        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j < i + 1; j++) {
                row += "* ";
            }
            for (let j = 0; j < space; j++) {
                row += "  ";
            }
            for (let j = 0; j < i + 1; j++) {
                row += "* ";
            }
            space -= 2;
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
