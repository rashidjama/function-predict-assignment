function greeting() {
  return "Hello";
  console.log("World");
}
var word = greeting();
// Output is Hello only because anything after return keyword never runs
console.log(word);


function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  return sum;
}
//Once again T-diagram helped me to predict correctly and the outcome is
/* Summing numbers!
  num1 = 3
  num2 = 5 
  Summing numbers!
  num1 = 4
  num2 = 7
  result1 = 8
  result2 = 11
 */
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);


function highFive(num) {
  for (var i = 0; i < num; i++) {
    if (i == 5) {
      console.log("High Five!");
    } else {
      console.log(i);
    }
  }
}
//Nothing will be displayed because we never run this function