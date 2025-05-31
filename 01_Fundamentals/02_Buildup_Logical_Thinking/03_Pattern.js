/*
Pattern-3: Right-Angled Number Pyramid
#Easy

Problem Statement: Given an integer N, print the following pattern.

1
1 2 
1 2 3 
1 2 3 4
1 2 3 4 5 

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1
1 2
1 2 3

Input: N = 6
Output:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/

class Solution {
    printPattern(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
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
