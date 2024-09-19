// Task 1

//function setup() {
  //createCanvas(400, 400);

  //let number = prompt("enter a number between 1 and 10:");
  //number = Number(number);
  //console.log(typeof number);
  //console.log(number)

  //if(number >= 1 && number <= 10){
 //   console.log("well done");
  
 // }else {
 //   console.log("Wrong");
 // }
  
//}

// Task 2

//function setup() {
  //createCanvas(400, 400);

  //let number = prompt("Enter a number of the month (1-12):");
  //number = Number(number);
  //console.log(typeof number);
  //console.log(number)

  //if(number >= 3 && number <= 5){
 //   console.log("Spring");
  
 // }else if (number >= 6 && number <= 8){
//    console.log("Summer");

//  }else if (number >= 9 && number <= 11){
 //   console.log("Autumn");

 // }else {
//    console.log("Winter");
//  }
    
//}

// Task 3

//let radius = 60;

//function setup() {
  //createCanvas(500, 500);

 //describe("A vertical black line moves left and right following the mouse's x-position.");
 
  
//}

//function draw() {
 // background(220);
 // fill("white");

//  line(mouseX, 0, mouseX, 500);
//  line(0, mouseY, 500, mouseY);
//  console.log (mouseX + " this is mouse X");
//  console.log (mouseY + " this is mouse Y");

 // if (mouseX <= 250){
//    radius = 30;
//  }else if (mouseX >= 251){
  //  radius = 100;
 //   fill("red");
//  }

//  console.log (radius)
  
//  ellipse (mouseX, mouseY, radius, radius);

//}


// Task 1 switch

//function setup(){
//  let userOption = prompt("Enter a number between 1 and 7:");
//  switch(userOption){
//  case "1":
//  alert("Monday");
//  break;
// case "2":
//  alert("Tuesday");
// break;
//  case "3":
//  alert("Wednesday");
//  break;
//  case "4":
//  alert("Thursday");
//  break;
//  case "5":
// alert("Friday");
//  break;
//  case "6":
//  alert("Saturday");
//  break;
//  case "7":
//  alert("Sunday");
//  break;
//  default:
//  alert("Sorry, please enter a number through 1 and 7");
//  }
//  }

// task 2 switch
function setup(){
createCanvas(400, 400);
}
function draw(){
background(220);
let shape = prompt("please enter one of the folling shapes: square, circle or triangle");
switch(shape){
  case "square":
    square (200,100,100)
      break;
  case "circle":
    circle(200,200,200)
      break;
  case "triangle":
    triangle(60,40,30,120,340,120)
      break;
  default:
    alert ("please enter one of the specified shapes");
  

}


}

  