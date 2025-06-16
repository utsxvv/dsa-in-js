/*
Pattern-13: Increasing Number Triangle Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1
2 3
4 5 6

Input: N = 6
Output:

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
16 17 18 19 20 21

*/

class Solution {
    printPattern(N) {
        let num = 1;
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += num + " ";
                num++;
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
