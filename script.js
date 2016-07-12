
document.getElementById("button1").onclick = function() {
  var belowNumber = document.getElementById("belowNumber").value;
  var threes = 0;
  var fives = 0;
  var i = 3;

  while (i < belowNumber) {

    if (i % 3 == 0) {
      threes = threes + i;
    }

    if (i % 5 == 0) {
      fives = fives + i;
    }

    i++
  }

  var result = threes + fives;

  document.getElementById('result').innerHTML = result;

};

document.getElementById("button2").onclick = function() {
  var belowNumber = document.getElementById("belowNumber2").value;
  var one = 1;
  var two = 2;
  var three = 3;
  var result = 2;

  while (one + two < belowNumber) {
    three = one + two;
    one = two;
    two = three;
    console.log(three);
    if (three % 2 == 0) {
      result = result + three;
      console.log(result + "result");
    }
  }

  document.getElementById('result2').innerHTML = result;
}



document.getElementById("button3").onclick = function() {
  var belowNumber = document.getElementById("belowNumber3").value;
  var number = 2;

  while (number * number <= belowNumber) {
    if (belowNumber % number === 0) {
      belowNumber /= number;
    } else {
      number += 1;
    }
  }
  console.log(belowNumber);

  document.getElementById('result3').innerHTML = belowNumber;





}
