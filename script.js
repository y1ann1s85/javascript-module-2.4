// let test = {};

// test["first_name"] = "giannis";
// test["last_name"] = "alexiou";
// test["age"] = 34;

// console.log(); -- show details

// console.log("My profile:", test, "Type:", typeof test["last_name"]);

// console.log(typeof smth); -- ask the type of something

// == compare values / != reverse
// === compare type  / !== reverse

// console.log(1 * 1 == 2);

// let greeting = "Hi I am " + " " + test["first_name"] + " " + test["last_name"] + " " + test["age"];
// let greeting = `Hi I am ${test['first_name']} ${test["last_name"]} ${test["age"]}`;

// console.log(greeting);

// DECLARATIONS

// let myName = "giannis";
// console.log(myName);

// let myNumber = 33;
// console.log(myNumber);

// let myObject = {};
// console.log(myObject, typeof myObject);

// let myBullean = true;
// console.log(myBullean, typeof myBullean);

// let myNull = null;
// console.log(myNull, typeof myNull);

// let myArray = [];
// console.log(myArray, typeof myArray);

// console.log("my name is " + myName, "my number is " + myNumber, myObject, myBullean, myNull, myArray);

// if (+Infinity !== -Infinity) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// // console.log(anything);

// // ADVANCED DATA TYPES

// myArray.push(myName); //add stuf to arrays
// console.log(myArray);
// myArray.push(myObject, "hello there", myNull);
// console.log(myArray);

// myObject.arrayInObject = myArray; //add stuff to objects
// console.log(myObject);

// let emptyObject = {};

// let newObject = {
//     myName : "giannis",
//     myNumber : 1,
//     myArray : [
//         "giannis", 33, true, {myName : "giannis"}
//     ]
// }

// newObject.new2Object = myNull;
// console.log(newObject); // request value from object
// console.log(newObject.myArray[3]); // request value from array

// console.log(1 == "1");

// console.log(1 + 10);

// if (newObject.myNumber == 17) {
//     console.log("my number is 1");
// } else {
//     console.log("false");   
// }

// newObject.myNumber == 17 ? console.log("true") : console.log("false"); // if shortcut


// if (1 == 1 || 1 != 0 && 2 == 2) { // ||or &&and 
//  console.log(true);   
// } else {
//   console.log(false); 
// }

// if (newObject.myNumber == 1 && typeof newObject.myName == "string") {
//     console.log(true);   
// } else {
//     console.log(false);   
// }

// let sum = 0;
// let sq = 0;

// for (let i = 1; i <= 10; i++) {
//     sq = i * i;
//     sum += sq;
// }

// console.log(sum);

//     // for (let index = 0; index < array.length; index++) {
//     //     const element = array[index];
    
//     // }
    
//     // let arr=[1,2,3,4,5]
//     // let sum=0
//     // for (let index = 0; index < array.length; index++) {
//     //     console.log([index]*arr[index]);
    
//     //     let x;
//     //     x = arr[index]*arr[index];
//     //     sum = sum + x
//     // }
    
    
    
    
//     // for (var x = 2; x <= 100; i ++){
//     //     console.log(`the square of 2 ${i} is ${x * x}`);
//     // }
    
//     // for (var y = 3; y <= 100; y ++){
//     //     console.log(`the square of 3 ${y} is ${y * y}`);
//     // }
    
//     // for (var z = 100; z <= 100; z ++){
//     //     console.log(`the square of 100 ${z} is ${z * z}`);
//     // }
    
    
    
//     for (var i = 1; i <= 100; i ++){
//        console.log(`the square of 1 ${i} is ${i * i}`);
    
//     }
    
//     for (var x = 2; x <= 100; i ++){
//        console.log(`the square of 2 ${i} is ${x * x}`);
//     }
    
//     for (var y = 3; y <= 100; y ++){
//        console.log(`the square of 3 ${y} is ${y * y}`);
//     }
    
    
    
//     var myarray = [];
    
//     for (var i = 0; i <= 100; i++){
//        myarray.push(i);
//     }
//     console.log(myarray);
    
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10){
//        myarray.push(i);
//     }
//     console.log(myarray);
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10) {
//        if (i > 50) {
//            myarray.push(i);
//        }
//     }
//     console.log(myarray);
    
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10) {
//        while (i == 10) {
//            myarray.push(i);
//        }
//     }
//     console.log(myarray);
    
    
    
    
//     var condition = true;
    
//     while (condition == true) {
//        console.log(true);
//     }
    
    
    
//     var x = 1;
//     x = 2;
    
//     x += 2;
    
//     x * 3;
    
    
    
//     console.log(console);
    
    
//     var mynumber = 1;
//     var myfunction = function() {
//        console.log('Hello');
//     }
    
    
    
//     function myfunction1() {
    
//     }
    
//     var myfunction2 = function() {
//        var greeting = 'Hello World';
//        console.log(greeting);
    
//     };
    
    
//     var first = function(param) {
//        var greeting = 'Hello World' + param;
//        console.log(greeting);
    
//     };
    
    
//     var myfunction = function(param) {
//        console.log(typeof param);
//     }
    
//     myfunction(28)
    
//     myfunction('mohammad')
    
//     var myarray = ['mohammad'];
//     var myfunction = function(param) {
//        if (typeof param == '') {
//            myarray.push(param);
//            console.log('myarray');
//        }
//     }

// DOCUMENT OBJECT MODEL

// console.log("Hello world");

// // document.getElementById() // target by id

// var mybutton = document.getElementById("myButton");
// console.log(mybutton);

// // mybutton.addEventListener() // target events
// // document.createElement("") // create elements
// // smthng.innerHTML = ""; // add text
// // smthng.appendChild(""); // append on screen

// mybutton.addEventListener("click", function() {
//    console.log('giannis');
//    var myMessage = document.createElement("p");
//    myMessage.innerHTML = "Thank you";
//    let myBody = document.getElementById("myContainer");
//    myBody.appendChild(myMessage);
//    mybutton.style.backgroundColor = "red";
// });

// let myInput1 = document.getElementById("input1");
// let myInput2 = document.getElementById("input2");

// myInput1.addEventListener("keyup", function(event) {
//    console.log(event);
//    let myContainer = document.getElementById("myContainer2");
//    myContainer.innerHTML = event.target.value;
// });

// // Random access to array elements on click.
// // Random background change 
// const bgColors = ['grey', 'green', 'blue', 'orange', 'red'];
// const btn_bgColor = document.querySelector("#bg-color-changer");
// let color;
// btn_bgColor.addEventListener("click",function (event) {
//   document.body.style.background = color;
//   color = bgColors[Math.floor(Math.random()*bgColors.length)];
// });

// STUDYGROUP

// console.log("Hello world");
// let myName = "Giannis";
// let mySurname = "Alexiou";
// document.write(`${myName} ${mySurname}`);
// let userInput = document.querySelector("#userInput");
// let myPost = document.querySelector("#posts");
// let myButton = document.querySelector("#post");

// userInput.addEventListener("keyup", function(e) {
//    console.log(e.target.value);
//    // let newPost = document.createElement("p");
//    // console.log("got fired");
//    // document.write("got fired");
//    // newPost.setAttribute("class", "userPost");
//    myPost.innerHTML =
//    `<p>${e.target.value}</p>`;
//    // myPost.appendChild(myPost);
// });

// myButton.addEventListener("click", function(e) {
//    let newPost = document.createElement("p");
//    // console.log("got fired");
//    // document.write("got fired");
//    newPost.setAttribute("class", "userPost");
//    newPost.innerHTML =
//    `<p>${e.type} got fired</p>`;
//    myPost.appendChild(newPost);
// });

let myBooks = [
   "book1",
   "book2",
   "book3",
   "book4",
   "book5",
   "book6",
   "book7",
   "book8",
   "book9",
   "book10"
];

console.log(myBooks);

// let ul = document.createElement("ul");
// document.querySelector("#list").appendChild(ul);

// // myBooks.forEach(function(myBook){

// //    let li = document.createElement("li");
// //    ul.appendChild(li);
// //    li.innerHTML += myBooks;
// // });

// for (i=0; i<myBooks.length; i++) {
//    let li = document.createElement("li");
//    ul.appendChild(li);
//    li.innerHTML += myBooks[i];

// }


const bookDetails = {
   book1: {
      title: "title1",
      author: "author1",
      language: "lang1"
   },
   book2: {
      title: "title2",
      author: "author2",
      language: "lang2"
   },
   book3: {
      title: "title3",
      author: "author3",
      language: "lang3"
   },
   book4: {
      title: "title4",
      author: "author4",
      language: "lang4"
   },
   book5: {
      title: "title5",
      author: "author5",
      language: "lang5"
   },
   book6: {
      title: "title6",
      author: "author6",
      language: "lang6"
   },
   book7: {
      title: "title7",
      author: "author7",
      language: "lang7"
   },
   book8: {
      title: "title8",
      author: "author8",
      language: "lang8"
   },
   book9: {
      title: "title9",
      author: "author9",
      language: "lang9"
   },
   book10: {
      title: "title10",
      author: "author10",
      language: "lang10"
   }
}

let ul = document.createElement("ul");
document.querySelector("#list").appendChild(ul);

// // myBooks.forEach(function(myBook){
// //    let li = document.createElement("li");
// //    ul.appendChild(li);
// //    li.innerHTML += bookDetails;
// // });

for (i=0; i<myBooks.length; i++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   li.innerHTML += bookDetails;

}