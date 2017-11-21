var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;
var highGrade = 0;
var lowGrade = 100;

for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 91) {
        gradeA += 1;
        if (scores[i] > highGrade) {
            highGrade = scores[i];
        }
    }
    if (scores[i] <= 90 && scores[i] >= 81) {
        gradeB += 1;
    }
    if (scores[i] <= 80 && scores[i] >= 71) {
        gradeC += 1;
    }
    if (scores[i] <= 70 && scores[i] >= 61) {
        gradeD += 1;
    }
    if (scores[i] <= 60) {
        gradeF += 1;
        if (scores[i] < lowGrade) {
            lowGrade = scores[i];
        }
    }
}
console.log("A: " + gradeA);
console.log("B: " + gradeB);
console.log("C: " + gradeC);
console.log("D: " + gradeD);
console.log("F: " + gradeF);
console.log("Highest grade: " + highGrade);
console.log("Lowest grade: " + lowGrade);