/*
Pattern-22: The Number Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

5 5 5 5 5 5 5 5 5
5 4 4 4 4 4 4 4 5
5 4 3 3 3 3 3 4 5
5 4 3 2 2 2 3 4 5
5 4 3 2 1 2 3 4 5
5 4 3 2 2 2 3 4 5
5 4 3 3 3 3 3 4 5
5 4 4 4 4 4 4 4 5
5 5 5 5 5 5 5 5 5


Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3

Input: N = 6
Output:

6 6 6 6 6 6 6 6 6 6 6 
6 5 5 5 5 5 5 5 5 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 2 1 2 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 5 5 5 5 5 5 5 5 6 
6 6 6 6 6 6 6 6 6 6 6

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < 2 * N - 1; i++) {
            let row = "";
            for (let j = 0; j < 2 * N - 1; j++) {
                let top = i;
                let left = j;
                let right = 2 * N - 2 - j;
                let bottom = 2 * N - 2 - i;

                let minDistance = Math.min(
                    Math.min(top, bottom),
                    Math.min(left, right)
                );

                row += N - minDistance + " ";
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
