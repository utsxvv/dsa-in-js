/*
Pattern-12: Number Crown Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

1                 1
1 2             2 1
1 2 3         3 2 1
1 2 3 4     4 3 2 1
1 2 3 4 5 5 4 3 2 1

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1         1
1 2     2 1
1 2 3 3 2 1

Input: N = 6
Output:

1                     1
1 2                 2 1
1 2 3             3 2 1
1 2 3 4         4 3 2 1
1 2 3 4 5     5 4 3 2 1
1 2 3 4 5 6 6 5 4 3 2 1

*/

class Solution {
    printPattern(N) {
        let space = 2 * (N - 1);

        for (let i = 1; i <= N; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }

            for (let j = 1; j <= space; j++) {
                row += "  ";
            }

            for (let j = i; j >= 1; j--) {
                row += j + " ";
            }

            console.log(row);
            space -= 2;
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
