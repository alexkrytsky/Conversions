// Conversions project
// Author: Alex Krytskyi
// IT207
// Date: 10/2/17

//displays a friendly message.
function greeting(){
  //check is the element already created or not. If not creates and writes to it. Else - just writes to the element
  if (document.getElementById("hello") == null){
    var greetingHeadline = document.createElement("h1");
    var msg = document.createTextNode("Welcome to our conversion page!");
    greetingHeadline.appendChild(msg);
    greetingHeadline.id = "hello";

    document.getElementById("welcome").appendChild(greetingHeadline);
  }
  else {
    document.getElementById("hello").innerHTML = "Welcome to our conversion page!";
  }

}

//prompts the user for their name, and then displays a greeting containing their name in all upper case.
function personalGreeting(){

  var name = prompt("Hello stranger!\nMay I know your name?");
//check is the element already created or not. If not creates and writes to it. Else - just writes to the element
  if (document.getElementById("hello") == null) {
    var greetingHeadline = document.createElement("h1");
    greetingHeadline.id = "hello";
    var msg = document.createTextNode("Welcome " + name + "!\n Glad you are here today");
    greetingHeadline.appendChild(msg);

    document.getElementById("welcome").appendChild(greetingHeadline);
  }
  else {
    document.getElementById("hello").innerHTML = "Welcome " + name + "!\n Glad you are here today";
  }
}

// prompts the user for a celsius temperature, and then converts it to fahrenheit and displays the result.
function convertCFHelper(){
  var cel = prompt("Enter celsius");
    document.getElementById("result").innerHTML = cel + " celsius is "+ convertCF(cel) + " Fahrenheit";
}
function convertCF(cel){
  return (cel * 1.8 + 32);
}

//initiates Buttons with event listener onclick. So it will call the needed function
function initiateButtons(){

  document.getElementById("fahrCel").addEventListener('click',convertFCHelper);
  document.getElementById("weight").addEventListener('click',convertWeightGelper);
  document.getElementById("height").addEventListener('click',convertHeightHelper);
  document.getElementById("square").addEventListener('click',squareHelper);
  document.getElementById("bmi").addEventListener('click',calcBMI);


}

// prompts the user for a fahrenheit temperature, and then converts it to celsius and displays the result.

function convertFCHelper(){
  var fahrenheit = prompt("Enter fahrenheit");
  document.getElementById("result").innerHTML = fahrenheit + " fahrenheit is "+ convertFC(fahrenheit).toFixed(2) + " celsius";
}
function convertFC(fahrenheit){
  return (fahrenheit - 32)/1.8;
}
// takes a weight (in pounds) as a parameter and multiplies it by 0.45 to convert the weight to kilograms, and returns the result.
function convertWeightGelper(){
  var pounds = prompt("Enter pounds");
  document.getElementById("result").innerHTML = pounds + " pounds is "+ convertWeight(pounds).toFixed(2) + " kg";

}
function convertWeight(pounds){
  return pounds * 0.45;
}
// takes a height (in inches) as a parameter and multiplies it by 0.025 to convert the height to meters, and returns the result.

function convertHeightHelper(){
  var inches = prompt("Enter height in inches");
  document.getElementById("result").innerHTML = inches + " inches is "+ convertHeight(inches).toFixed(2) + " meters";

}
function convertHeight(inches){
  return inches * 0.025;
}
// takes a value and squares it (multiplies it by itself), and returns the result. (Math.pow.)
function squareHelper(){
  var userNumber = prompt("Enter a number");
  document.getElementById("result").innerHTML = userNumber + " <sup>2</sup> = "+ square(parseFloat(userNumber)).toFixed(2);

}

function square(userNumber){
  return Math.pow(userNumber,2);
}

// Prompt the user for their weight, in pounds, and store the result in a variable.
// Prompt the user for their height, in inches, and store the result in a variable.
// Convert the user's weight to kilograms using the convertWeight() function (#5, above).
// Convert the user's height to meters using the convertHeight() function (#6, above).
// Calculate BMI by dividing weight (in kilograms) by the height (in meters) squared. Use the square() function you defined in #7, above.
// Display the result, rounded to two decimal places
function calcBMI(){
  var weightLb = prompt("Enter your weight:");
  var heightIn = prompt("Enter your height:");

  var weightKg = convertWeight(weightLb);
  var heightMet = convertHeight(heightIn);

  var bmi = weightKg / square(heightMet);

  document.getElementById("result").innerHTML = "Your BMI is "+ bmi.toFixed(2);
  // var result = bmi.toFixed(2);


}
