/*
Pattern-20: Symmetric-Butterfly Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

*         *
* *     * *
* * * * * *
* *     * *
*         *

Input: N = 6
Output:

*                     *
* *                 * *
* * *             * * *
* * * *         * * * *
* * * * *     * * * * *
* * * * * * * * * * * *
* * * * *     * * * * *
* * * *         * * * *
* * *             * * *
* *                 * *
*                     *

*/

class Solution {
    printPattern(N) {
        let space = 2 * N - 2;

        for (let i = 1; i <= 2 * N - 1; i++) {
            let row = "";
            let stars = i;

            if (i > N) stars = 2 * N - i;

            for (let j = 1; j <= stars; j++) {
                row += "* ";
            }
            for (let j = 1; j <= space; j++) {
                row += "  ";
            }
            for (let j = 1; j <= stars; j++) {
                row += "* ";
            }

            if (i < N) space -= 2;
            else space += 2;

            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
