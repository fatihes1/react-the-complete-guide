# Introduction to React

## JS Refresher

### let & const

Read more about `let`: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
Read more about `const`: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

`let` and `const` basically replace `var`. You use `let` instead of `var` and `const` instead of `var` if you don't want to reassign the variable. (Effectively turning it into a constant therefore).

### ES6 Arrow Functions
Read more: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the `this` keyword.

Arrow function syntax may look strange but it's actually simple.

```js
function callMe(name) {
	console.log(name);
}
```

which you could also write as:
```js
const callMe = function(name) {
	console.log(name);
}
```

becomes:

```js
const callMe = (name) => {
	console.log(name);
}
```

#### Important

When having no arguments, you have to use empty parentheses in the function declaration:

```js
const callMe = () => {
	console.log('Fatih');
}
```
When having exactly one argument, you may omit the parentheses:

```js
const callMe = name => {
	console.log(name);
}
```

When just returning a value, you can use the following syntax:

```js
const returnMe = name => name;
```

That's equal to:
```js
const returnMe = name => {
	return name;
};
```

### Exports & Imports
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable. To still access functionality in another file, you need export (to make it available) and import (to get access) statements.

You got two different types of export: default (unnamed) and named exports:

default : `export default ...;`
named : `export const someData = ...;

You can import default exports like this:

`import someNameOfYourChoice from './path/to/file';`
Surprisingly, `someNameOfYourChoice` is totally up to you.

You can import named exports like this:
`import { someData } from './path/to/file';`

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file. When importing named exports, you can also import all named exports at once with the following syntax:
`import * as upToYou from './path/to/file';`

`upToYou` is-well- up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you `export const someData ) ...` (`path/to/file.js`) you can access it on the `upToYou` object with `upToYou.someData`.


### Classes

Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.

Like this:

```js
class Person {
    constructor() {
        this.name = 'Fatih';
    }

    printMyName() {
        console.log(this.name);
    }
}


const person = new Person();
console.log(person.name); // Fatih
```

In the above example, not only the class but also a property of that class is defined. They syntax you see there is the 'old' syntax for defining properties.
In modern JavaScript projects, you can also the following, more convenient way of defining class properties:

```js
 Class Person {
	name = 'Fatih';
}
const person = new Person();
console.log(person.name); // Fatih
 
 ```

### Spread & Rest Operators

The spread and rest operators actually use the same syntax: ...

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

#### Using the Spread Operator

The spread operator allows you to pull elements out of an array or object and gives you a standalone list of those elements.

```js 
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // [1, 2, 3, 4, 5]
```

Here's the spread operator used on an object:

```js
cons oldObject = {
	name: 'Fatih'
};
const newObject = {
    ...oldObject,
    age: 24
};

console.log(newObject); // {name: 'Fatih', age: 24}

```
The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.

### Destructuring

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

```js

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // 1
console.log(b); // 2
console.log(array); // [1, 2, 3]

// With Ocj.

const myObj = {name: 'Fatih', age: 24};
const {name} = myObj;
console.log(name); // Fatih
console.log(age); // 24
console.log(myObj); // {name: 'Fatih', age: 24}
```

Destructuring is very useful when working with function arguments. Consider this example:

```js
const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Fatih', age: 24}); // Fatih
```
Here, we only want to print the name in the function but we pass a complete person object to the function. Of course
this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

```js
const printName = ({name}) => {
    console.log(name);	
}

printName({name: 'Fatih', age: 24}); // Fatih
```

We get the same result as above but we save some code. By destructuring, we simply pull out the name property and  store it in a variable/ argument named name which we then can use in the function body.


## React Basics

HTML, CSS & JavaScript are about building user interfaces as well.
React makes building complex, interactive and reactive user interfaces simpler.
React is all about "Components"

### Components
React is all about components. Because all user interfaces in the end are made up of components

Why Components?
-  Reusability: Do not repeat yourself. Build components once and use them everywhere.
-  Separation of Concerns: Divide your UI into independent, reusable pieces, and think about each piece in isolation.

*Split big chunks of code into multiple smaller functions*

### React & Components
React allows you to create re-usable and reactive components consisting of HTML, CSS and JavaScript.
Define the desired target states(s) and let React figure out the actual JavaScript DOM instructions to get there.

### JSC = "HTML in JavaScript"

```js
<p title ="Intro text">This is a paragraph</p>
```
"Syntactic Sugar" - JavaScript code that is written to look like something else.

```js
React.createElement('p', {title: 'Intro text'}, 'This is a paragraph');
```
Real JavaScript code, would run in the browser like this. Not nice to use for more complex than 'HTML code'.


### Props are 'attributes' of your 'custom HTML elements'

Passing Data via Props

![NGuCIg9yRA](https://user-images.githubusercontent.com/54971670/220861320-c11e68e3-d94b-4860-87bd-e30d21b90170.png)




