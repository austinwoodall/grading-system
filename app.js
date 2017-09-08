var input = document.getElementById('input');
var grade = document.getElementsByClassName('grade');
var gradeList = document.getElementsByTagName('li');

var span = "";
var gradeArray = [];
var average = 0;
var sumArr = 0;

for(var i = 0; i < gradeList; i++) {
   var createdSpan = document.createElement('span');
   span.className('grade-letter');
}

function calculateGrade() {
   var li = document.createElement('li');
   var gradeValue = document.getElementById('input').value;
   var g = document.createTextNode('Grade: ');
   li.appendChild(g);
   
   document.getElementById('grades-list').appendChild('li');
   document.getElementById('input').value = '';

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

   // Adds numbers inside the array
   for(i = 0; i < gradeArray.length; i++) {
      sumArr += +gradeArray[i];
      console.log(sumArr);
   }
  // values over 100 cannot be inputted
   if(inputGrade > 100) {
      alert("Invalid Grade Value");
      gradeArray.slice();
   }
   else {
      gradeArray.push(inputGrade);
   }
  // Average doesnt go over 100
   if(average >= 100) {
      average = 100;
   }
   else {
   // Divides sum of array then divides by the amount of numbers in array
      average = sumArr / gradeArray.length;
   }
   console.log(gradeArray);
}




