var input = document.getElementById('input');
var grade = document.getElementsByClassName('grade');

var span = "";
var gradeArray = [];
var average = 0;
var sumArr = 0;

function calculateGrade() {
   var inputGrade = input.value;
   for (var i = 0; i < inputGrade.length; i++) {
      if (inputGrade <= 100) {
         span = "A";
      }
      if (inputGrade <= 89) {
         span = "B";
      }
      if(inputGrade <= 79) {
         span = "C";
      }
      if(inputGrade <= 69) {
         span = "D";
      }
      if(inputGrade <= 59) {
         span = "F";
      }
   }

   document.getElementById('grade-letter').innerHTML = span;
   document.getElementById('average').innerHTML = average; 

   for(i = 0; i < gradeArray.length; i++) {
      sumArr += +gradeArray[i];
      console.log(sumArr);
   }

   if(inputGrade > 100) {
      alert("Invalid Grade Value");
      gradeArray.slice();
   }
   else {
      gradeArray.push(inputGrade);
   }

   if(average >= 100) {
      average = 100;
   }
   else {
      average = sumArr / gradeArray.length;
   }
   
   
   console.log(gradeArray);
}




