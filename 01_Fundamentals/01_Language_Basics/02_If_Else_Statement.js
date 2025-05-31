/*
If Elseif
#Easy

Problem Statement: Given marks of a student, print on the screen:

Grade A if marks >= 90
Grade B if marks >= 70
Grade C if marks >= 50
Grade D if marks >= 35
Fail, otherwise.
----------------------------------------------------------------------------------------------------------
Example:

Input: marks = 95
Output: Grade A
Explanation: marks are greater than or equal to 90.

Input: marks = 14
Output: Fail
Explanation: marks are less than 35.
-----------------------------------------------------------------------------------------------------------
Constraints:

0 <= marks <= 100
*/

class Solution {
    studentGrade(marks) {
        if (marks >= 90) console.log("Grade A");
        else if (marks >= 70) console.log("Grade B");
        else if (marks >= 50) console.log("Grade C");
        else if (marks >= 35) console.log("Grade D");
        else console.log("Fail");
    }
}

let solution = new Solution();
solution.studentGrade(95);
solution.studentGrade(14);
