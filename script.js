// logging
// console.log("hello javascript")
// console.error("error")
// console.warn("warning")
// alert("this is an alert")
// console.log(prompt("Type your name"));
// confirm("hello")

// decalaring variables
// var firstname = "Achref"
// var age = 20
// console.log(firstname);
// console.log(typeof age);

//data types
// primitive types
// var name = "salima"
// var age = 20
// var age1 = "20"
// var rating = 9.5
// var isPerson = false
// var x = null
// var y
// console.log(typeof y);

// complex types
// var array = [1, 2, 3, 4]
// var array1 = [true, 1, "sleep"]
// console.log(array1);
// console.log(Array.isArray(array1));

// var person = {
//   firstname: "wael",
//   lastname: "beldi",
//   age: 20,
//   hobbies: ["gaming", "sleep"],
//   address: {
//     city: "nabeul",
//     zipcode: 8000
//   }
// }
// console.log(person);

// var arrayOfObjects = [{name: "achref"},{name: "mootez"}]
// console.log(arrayOfObjects);

// function greet() {
//   return "hello"
// }
// console.log(greet());

// function addition(a, b) {
//   return a+b
// }
// console.log(addition(2,5));

// concatination
// var name = "wael"
// var age = 32
// console.log("My name is " + name + " and I am " + age + " years old");

// string methods
// var s = "Hello World"
// var val
// console.log(s);

// val = s.length
// console.log(val);

// console.log(s[0]);

// val = s.toLowerCase()
// console.log(val);

// array methods
// var colors = ["black", "red", "green"]
// console.log(colors);
// console.log(colors.length);
// console.log(colors[1]);
// colors.push("yellow")
// colors.unshift("orange")
// colors.pop()
// colors.shift()
// colors[2] = "pink"
// console.log(colors);
// console.log(colors.indexOf("blue"));

// arithmetic operators
// console.log("3"**"2");

// var i = 0
// console.log(i);
// console.log(i++);
// console.log(i);


// comparison operators
// console.log(5 < 5);

// object literals
// var person = {
//   firstname: "wael",
//   lastname: "beldi",
//   age: 20,
//   hobbies: ["gaming", "sleep"],
//   address: {
//     city: "nabeul",
//     zipcode: 8000
//   }
// }
// person.email = "wael@gmail.com"
// person.age = 32
// delete person.firstname
// console.log(person);

// truthy and falsy
// undefined, null, NaN, "", false, 0
// console.log(Boolean(1));

// logical operators
// X || Y
// console.log(5<2 || 4>2);

// loops
// for
// for(var i=0;i<=5;i++) {
//   console.log(i);
// }

// var array = [10, 20, 30]
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for..in
// var array = [10, 20, 30]
// for (var i in array) {
//   console.log(array[0]);
// }

// for..of
// var array = [10, 20, 30]
// for (var val of array) {
//   console.log(val);
// }

// while
var array = [10, 20, 30]
var sum = 0;
var i = 3;
// while (i < array.length) {
//   sum = sum + array[i]
//   i++
//   console.log("inside:", sum);
// }
// console.log("total:",sum);

// do..while
// do {
//   sum = sum + array[i]
//   i++
//   console.log("inside:", sum);
// } while (i < array.length)

// console.log("total:",sum);

// conditionals
// if..else
// var x=201
// if (x<=10) {
//   console.log("ticket price is 10");
// } else if (x <=16) {
//   console.log("ticket price is 16");
// } else {
//   console.log("ticket price is 20");
// }

// switch
var color = "white"
// switch (color) {
//   case "blue":
//     console.log("Color is blue");
//     break
//   case "red":
//     console.log("Color is red");
//     break
//   default:
//     console.log("Color is neither blue nor red");
// }

// function testColor(color) {
//   switch (color) {
//     case "blue":
//       return "Color is blue"
//     case "red":
//       return "Color is red"
//     default:
//       return "Color is neither blue nor red"
//   }
// }
// console.log(testColor("blue"));

// break / continue
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;
// for (var i in numbers) {
//   if (i % 2 == 0) continue;
//   sum += numbers[i]
// }

// console.log(sum);

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;

// for (var i in numbers) {
//   sum += numbers[i];
//   if (sum >= 100) {
//     break;
//   }
// }
// console.log(sum)
