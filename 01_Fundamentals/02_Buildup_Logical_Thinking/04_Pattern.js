/*
Pattern-4: Right-Angled Number Pyramid-II
#Easy

Problem Statement: Given an integer N, print the following pattern.

1
2 2 
3 3 3 
4 4 4 4
5 5 5 5 5 

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

1
2 2 
3 3 3 

Input: N = 6
Output:

1
2 2 
3 3 3 
4 4 4 4
5 5 5 5 5 
6 6 6 6 6 6

*/

class Solution {
    printPattern(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += i + " ";
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
