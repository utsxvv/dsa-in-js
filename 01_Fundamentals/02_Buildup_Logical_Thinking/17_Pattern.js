/*
Pattern-17: Alpha-Hill Pattern
#Easy

Problem Statement: Given an integer N, print the following pattern.

        A
      A B A
    A B C B A
  A B C D C B A
A B C D E D C B A

Here, N = 5
----------------------------------------------------------------------------------------------------------
Example:

Input: N = 3
Output:

    A
  A B A
A B C B A

Input: N = 6
Output:

          A
        A B A
      A B C B A
    A B C D C B A
  A B C D E D C B A
A B C D E F E D C B A

*/

class Solution {
    printPattern(N) {
        for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j < N - i - 1; j++) {
                row += "  ";
            }

            let ch = String.fromCharCode(65);
            let breakpoint = Math.floor((2 * i + 1) / 2) + 1;

            for (let j = 1; j <= 2 * i + 1; j++) {
                row += ch + " ";
                if (j < breakpoint)
                    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
                else ch = String.fromCharCode(ch.charCodeAt(0) - 1);
            }

            for (let j = 0; j < N - i - 1; j++) {
                row += "  ";
            }
            console.log(row);
        }
    }
}

let solution = new Solution();
solution.printPattern(3);
console.log("");
solution.printPattern(6);
