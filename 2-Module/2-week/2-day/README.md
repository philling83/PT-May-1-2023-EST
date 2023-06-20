# M2W2D2

## [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

- the `bind()` function is used to make a function that, no matter how it is called, is called with a particular `this` value

```js
let boundFunc = func.bind(context);
```

- When bind is called it returns an `exotic function` (a function with its `this` bound no matter where it's invoked)

```js
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  };

  ageUp(){
    this.age++;
    console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  };

  eat(food){
    console.log(`yum i love ${food}`);
  };
}

let joe = new Person('Joe', 24);
let aging = joe.ageUp

// aging() // TypeError: Cannot read properties of undefined (reading 'age') 
// once we assigned that method to a variable we lost the context.

let boundAging = aging.bind(joe);
// notice we are using the function that wouldn't work before, can use the method as well by saying joe.ageUp.bind(joe);
boundAging(); // prints `Happy birthday! Joe is 25 years old!`
```

- Important to remember that bind will update the context of any function with any context
- Used to guarantee the context of a function

## Call and Apply

- Will immediately invoke your bound function and return the return value of that function called with the specific context you assign
- Easy way to guarantee the context of a function call and be able to pass args to that function at the same time

### Syntax

- The first arg for both Call and Apply is the `this` that you want to bind the functions context to

- [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  - expects comma-separated values for the args after `this`

  ```js
  joe.eat.call(joe, 'apples'); // prints `yum i love apples`
  ```

- [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  - expects an array of args after `this`

  ```js
  joe.eat.apply(joe, ['pears']) // prints `yum i love pears`
  ```

## Arrow Functions

- Context based on where the code is `called` (`invoked`), the context of an arrow function is based on where the function was `defined`

```js
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  };

  showContext(){
    function declaredFunc(){
      console.log(this)
    };

    declaredFunc(); 
    
    const arrowFunc = () => {
      console.log(this)
    };

    arrowFunc(); 
  };
};

const newPerson = new Person('Alex', 30);

newPerson.showContext();
```

Why not just define all methods with arrows so the context is never lost?

- Bad practice, creates a new function for every instance, adding to application memory

## Project Time