/*
Pattern-2: Right-Angled Triangle Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

* 
* * 
* * * 
* * * * 
* * * * *

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

* 
* * 
* * *

Input: N = 6
Output:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * *

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
