var input = document.getElementById('input');
var grade = document.getElementsByClassName('grade');



var span = "";
var gradeArray = [];
var average = 0;
var sumArr = 0;

function calculateGrade() {
   
   var gradeValue = document.getElementById('input').value;
   var inputGrade = input.value;

   if (inputGrade <= 100) {
      span = "A";
   }
   if (inputGrade <= 89) {
      span = "B";
   }
   if (inputGrade <= 79) {
      span = "C";
   }
   if (inputGrade <= 69) {
      span = "D";
   }
   if (inputGrade <= 59) {
      span = "F";
   }

   // Hook up <elements> to their corresponding variables
   document.getElementById('grade-letter').innerHTML = span;
   document.getElementById('average').innerHTML = average;

   document.getElementById('input').value = '';

   // Gets sum of numbers inside the array
   for (i = 0; i < gradeArray.length; i++) {
      sumArr += +gradeArray[i];
      console.log(sumArr);
   }
   // values over 100 and blnk values are ignored
   if (inputGrade > 100 || inputGrade == '') {
      alert("Invalid Grade Value");
      gradeArray.slice();
   }
   else {
      gradeArray.push(inputGrade);
   }

   // Divides sum of array then divides by the amount of numbers in array
   average = sumArr / gradeArray.length;
   
  // Console.log for debugging
   console.log(gradeArray);
}