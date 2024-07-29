// let sum: number = 10;

// let total = sum;

// console.log(sum);

// let isDone: boolean = false;

// console.log(typeof isDone);

// let numbers: number[] = [1, 2, 3, 4];
// numbers.splice(3, 2, 6); // numbers becomes [1, 2, 5, 4]

// console.log(numbers);

// //strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;

// console.log(a, b, c, e, f, g);

// let f: number | string = "Zohaib"; // This is allowed now
// f = 22;

// console.log(f);  // Outputs: 22

//use const where variable values do not change
// const a = 5;
// const b : number = 33;
// const c ="best";

// //I suggest use let instead of var everywhere,
// //becuase let has blocked scope
// if (true) {
// 	var z = 4;
// 	//use z
//     // console.log("let: " + z);// Error: z is not defined in this scope
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope

// import inquirer from "inquirer";
// import chalk from "chalk";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));

// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// //console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string
//because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

// let age: number | "died" | "unknown";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// //age = "living";//Error

// let zia: "zia";

// zia = "zia";
// //zia = "khan";//Error

// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK

// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;

// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student.name);
// console.log(student["age"]);

// interface Student {
//     student_id: number;
//     name: string;
//   }

// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }

// type intersected_type = Student & Teacher;

// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };

// console.log(obj1.teacher_Id);
// console.log(obj1.name);

// function error(message: string): never {
//     throw new Error(message);
// }

// function infiniteLoop(): never {
//     while (true) {}
// }

// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)

// enum FileAccess {
//     // Computed member
//     Read = 2 /* 1 << 1 */,
//     Write = 4 /* 1 << 2 */,
//     ReadWrite = Read | Write
// }

// let myAccess: FileAccess = FileAccess.ReadWrite;
// console.log(myAccess); // Output: 6

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// let myColor: Color = Color.Green;
// console.log(myColor); // Output: Green

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
//   }
//   console.log(Direction["Up"], Direction["Down"], Direction["Left"], Direction["Right"]);

// let x: number = 10;
// let y = x;
// console.log(x);

// function example() {

//     if (true) {
//       let blockScoped = 'I am block scoped'; // Accessible only within the if block
//       const blockScopedConst = 10; // Accessible only within the if block
//       var functionScoped = 'I am function scoped'; // Accessible throughout the function
//     }

//     console.log(blockScoped); // ReferenceError: blockScoped is not defined
//     console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
//     console.log(functionScoped); // Output: I am function scoped
//   }

// let global: string = "Zohaib";
// const global2: string = "Ali";

// function myFunctionScoped() {
//     let local: string = "Ali";
//     console.log(global);   // Logs "Zohaib"
//     console.log(local);    // Logs "Ali"
//     console.log(global2);  // Logs "Ali"
// }

// let number = [1,2,3,4]

// number.splice(2,2 , 7)

// console.log(number)

// function vaalue (a:number, b:number)
// {
//   return a+b;
// }

// let sum = vaalue(80,20);
// console.log(sum);

// function multi(a: string|number){
//    return a;
// }

// let ple = multi("Zohaib");
// console.log(ple)

// let x: string| number ;
// console.log(typeof x);

// function sum(x: number,y: number){
//     if(typeof x === "number" && typeof y === "number"){
//         return x + y;
//     }
//     else{
//         return new Error("Not a number");
//     }
// }

// let result = sum(10,20);
// console.log(result)

// let value = 10;
// console.log(typeof value);

// const value2 = 10;
// console.log(typeof value2);

// var value3 = 10;
// console.log(typeof value3);

let person: {
  name: string;
  age: number;
  email: string;
  password: any;
} = {
  name: "John",
  age: 30,
  email: "johndoe@me.com",
  password: 123456,
};

console.log(person["name"]);




let arr: any[] = ["zohaib", "ali", 10, true]; // this is array include multiple values and types

arr.splice(2, 1, 20); //this is used to remove and replace elements in the array
// arr.push(30);   // this is used to add one or more elements to the last of the array 
// arr.shift();    // this is used to remove the first element from the array
// arr.pop();     // this is used to remove the last element from the array
// arr.unshift(123456); // this is used to add one or more elements from beggining the array 


console.log(arr);


let tuple: [string, number, boolean, any?] = ["Zohaib", 34, true];

tuple.splice(2, 1, false)
tuple.push(Array)
console.log(tuple);


enum data {
    home, 
    about,
    contact,
    blog
}

console.log(data.contact);



let any: any[] = [10, 20, "home", true]

console.log(any);

// union
function union(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Numeric addition
  } else {
    return a.toString() + b.toString(); // String concatenation
  }
}

console.log(typeof union);


console.log(union("Zohaib", "Dayo")); // Output: Zohaib Dayo
console.log(union(10, 29)); // Output: 39


// union

let value: string | number;
value = "hello"; // Valid
value = 42; // Also valid

console.log(typeof value);

let literal: "abc" | 349 = "abc"; // Valid

console.log(literal);


// String literal type
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up'; // Valid
direction = 'down'; // Valid
// direction = 'north'; // Error: Type '"north"' is not assignable to type '"up" | "down" | "left" | "right"'.

console.log(direction); // Output: "up"


function add(a: number, b: number ): number {
  return a + b;
  // return (+a) + (+b);
}

// add(10,20)
console.log(add(10, 20)); // Output: 30


// Void

function greet(): void {
  console.log("Hello world");
}
greet();

// if we used any than all thing is  good we used multiple type but
//  another variable assign is type than not show error but unknown type show error 
let DataAny: any;  //no error used other variable assign types 
// let DataAny: unknown; //this is most power is this is check key error in types

DataAny = "Zohaib",
DataAny = 9439

let item: string;

item = DataAny

// this is never

// function error(message: string): never {
//   throw new Error(message);
// }

// console.log(error("Something went wrong"));



let dataArr: number[] = [1,2,3,4];

let arr2 = dataArr;

arr2.pop();

console.log(dataArr);


