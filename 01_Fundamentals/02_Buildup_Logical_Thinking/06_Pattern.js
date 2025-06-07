/*
Pattern-5: Inverted Numbered Right Pyramid
#Easy

Problem Statement: Given an integer N, print the following pattern.

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1 2 3
1 2
1

Input: N = 6
Output:

1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 1; j <= N - i; j++) {
                row += j + " ";
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
