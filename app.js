var input = document.getElementById('input');
var grade = document.getElementsByClassName('grade');

var span = "";

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
   
      document.getElementById('grade-letter').innerHTML = span;
   }
}

