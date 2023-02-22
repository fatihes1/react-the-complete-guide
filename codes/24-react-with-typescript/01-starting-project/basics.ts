// Primitive types: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitive types

// 'Number' type and 'number' type is different
// 'Number' is a wrapper object for 'number' type
// 'number' is a primitive type
let age: number; // :number is a type annotation
age = 12;

let userName: string; // :string is a type annotation
userName = "Fatih";

let isInstructor: boolean; // :boolean is a type annotation
isInstructor = true;

// More complex types

// 'Array' type is a generic type
// 'Array' type is a wrapper object for 'array' type

let hobbies: string[]; // :string[] is a type annotation
hobbies = ["Sports", "Cooking"];

let person; // let person: any;

person = {
  name: "Fatih",
  age: 24,
};

let person2: {
  name: string;
  age: number;
};

person2 = {
  name: "Fatih",
  age: 24,
};

let people: {
  name: string;
  age: number;
}[]; // :{name: string; age: number;}[] is a type annotation

// Type inference

let course = "React - The Complete Guide"; // By default, TypeScript infers the type of the variable
// We can also write let course: string = "React - The Complete Guide"; <-- like that
// If we try to assign a number to 'course' variable, TypeScript will throw an error
// course = 12345;

// Union types
let unionCourse: string | number = "React - The Complete Guide";
unionCourse = 12345; // we do not have an error here

// Type aliases
type StringOrNumber = string | number;
let aliasCourse: StringOrNumber = "React - The Complete Guide";

type Person = { name: string; age: number };
let person3: Person = { name: "Fatih", age: 24 };
let people2: Person[]; // :Person[] is a type annotation

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}
add("1", 3); // we get an error here

function print(value: any) {
  // the function's return type is 'void' by default
  console.log(value);
}

// Generic

// Type safety is not guaranteed in generic types
function insertAtBeginning<T>(array: T[], value: T) {
  // return type is ': T[]'
  const newArray = [value, ...array];
  return newArray;
}
