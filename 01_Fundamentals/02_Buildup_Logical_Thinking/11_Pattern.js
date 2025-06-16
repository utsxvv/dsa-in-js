/*
Pattern-11: Binary Number Triangle Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

1 
0 1
1 0 1
0 1 0 1
1 0 1 0 1

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1 
0 1
1 0 1

Input: N = 6
Output:

1 
0 1
1 0 1
0 1 0 1
1 0 1 0 1
0 1 0 1 0 1

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let row = "";
            let start = 1;

            if (i % 2 == 0) start = 1;
            else start = 0;

            for (let j = 0; j <= i; j++) {
                row += start + " ";
                start = 1 - start;
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
