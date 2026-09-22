// Declare and initialize an empty multidimensional array (Array of arrays)
var students = [[], [], []];

// Declare and initialize a multidimensional array representing the following matrix:
document.write("<h2> <br>  Declare and initialize a multidimensional array representing the following matrix:</h2>");
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write(matrix[0] + "<br>");
document.write(matrix[1] + "<br>");
document.write(matrix[2]  );

// Write a program to print numeric counting from 1 to 10:
document.write("<h2> <br>  Write a program to print numeric counting from 1 to 10:</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

document.write("<h2> <br> Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user:</h2>");

var num = +prompt("Enter your table number:") ||5
var multiple = +prompt("Enter a number of multiples")  ||12

for(var i = 1; i<= multiple; i++){
      document.write(`${num} x ${i} = ${num*i} <br>`);  

}

// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]:

document.write("<h2> <br> Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]: </h2>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>");

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h2> <br>  Generate the following series in your browser. See example output. </h2> <br> <h5> a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 <br> b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 <br> c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 <br> d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 <br> e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k </h5> ");

document.write("<h3>Counting:</h3>");

for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<h3>Reverse counting:</h3>");

for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even:</h3>");

for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");

for (var i = 1; i <= 19; i = i + 2) {
    document.write(i + ", ");
}

document.write("<h3>Series:</h3>");

for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k, ");
}

//STARS PATTERN 

// https://www.geeksforgeeks.org/javascript/nesting-for-loops-in-javascript/

// Star Pattern
for ( i =1; i<=4 ; i++){

    for( j =1 ; j<=5 ; j++)
     {
        document.write("*")
     }
     document.write("<br>")
    }
    
    document.write(`<br><br>`)
    
    
    // //Star Pattern in ascending order
    document.write(`Star pattern in asscending order <br>`)
    document.write(`<br><br>`)
    for ( i =5; i>=1 ; i--){
    
    for( j =5 ; j>=i ; j--)
     {
        document.write("*")
     }
     document.write("<br>")
    }
    
    document.write(`<br><br>`)
    
    
    //Dynamic
    var userRow = +prompt("Enter Number Of Rows..")
    var userCol = +prompt("Enter Number Of Columns..")
    var userChar = prompt("Enter your character")
    for ( i =1 ; i<=userRow ; i++){
        for( j=1 ; j<=userCol ; j++ ){
            document.write(userChar)
        }
        document.write(  "<br>")
    }
    document.write(`<br><br>`)
    
    
    
    //pyramid pattern 
    document.write(`<br><br>Pyramid Pattern`)
    let rows = 5;
    document.write(`<br><br>`) 
    for (let i = 1; i <= rows; i++) {
      let str = "";
      
      for (let j = 1; j <= rows - i; j++) {
        str += " ";
      }
      
      for (let k = 1; k <= (2 * i - 1); k++) 
       {
        str += "*";
      }
      document.write(str+"<br>");
    }
    document.write(`<br><br>`)
    
    
    
    
    
    //right-aligned triangle
    document.write(`<br><br>right-aligned triangle`)
    let rows2 = 5;
    document.write(`<br><br>`)
    for (let i = 1; i <= rows2; i++) {
        let rowString2 = "";
    
    
        for (let j = 1; j <= rows2 - i; j++) {
            rowString2 += " ";
        }
    
        for (let k = 1; k <= i; k++) {
            rowString2 += "*";
        }
    
        document.write(rowString2+"<br>");
    }
    document.write(`<br><br>`)
    
    //inverted right aligned-triangle
    document.write(`<br><br> inverted right-aligned triangle`)
    let rows1 = 5;
    document.write(`<br><br>`)
    for (let i = 0; i < rows1; i++) {
        let rowString1 = "";
    
        for (let j = 0; j < i; j++) {
            rowString1 += " ";
        }
    
        for (let k = 0; k < rows1 - i; k++) {
            rowString1 += "*";
        }
    document.write(rowString1+"<br>");
    }

 
    document.write("<h2> <br> Stars practice </h2>");

for(i=1; i<=5; i++){
for(j=1; j<=5-i; j++){
 document.write("*")
}
document.write("<br>")
}

document.write("<h2> <br> stars practice </h2>");
let row = 5;
for (let i = 1; i <= row; i++) {
  let line = "";
  // add spaces first, for centering
  for (let s = 1; s <= row - i; s++) {
    line += " ";
  }
  // then add stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  document.write(line);
}


document.write("<h2> <br> practice </h2>");
var cities = ["karachi", "islamabad", "skardu", "lahore"];
var userCity = prompt("Enter your city name....");
var flag = false;
var transform = userCity.toLowerCase();
for (var i = 0; i < cities.length; i++) {
    if (transform === cities[i]) {
        flag = true;
        document.write(transform, "found");
        break;
    }
}
if (flag === false) {
    document.write(userCity," not found");
}

document.write("<h2> <br> star practice </h2>");

for (var i = 1; i <= 5; i++) {
   for (var j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }
    for (var k = 1; k <= (2 * i - 1); k++) {
        document.write("*");
    }
    document.write("<br>");
}
var birthMonth = prompt("Enter your birth month....")
 
if(birthMonth.length>3){
console.log(birthMonth.slice(0,3));
}