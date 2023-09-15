# M2W2D1

[Lecture Recording](https://us02web.zoom.us/rec/share/Zpn2xx5tkJq5eDp8GMlMFbmyA3-M3dVOvYfSjZLaOIRQnnK9pNNFxnirOr08EDMM.XKysIUozURRsM8Uz)
<br />
Passcode: *C+Cr99b

---

## Scope vs Context

- Scope refers to the visibility and availability of variables

- Context refers to the value of the `this` keyword (how/where the function is invoked)

## Context
### Context refers to the value of `this` within a function and `this` refers to where a function is invoked.
- If a function is invoked on the object it was created in, its context stays the same
- If a function (not invoked) is assigned to variable, its context changes
- If a function (not invoked) is passed as a callback, its context changes

```js
class Test {
  testFunc() {
    console.log(this);
    console.log(`this is equal to test1: ${this === test1}`);
  }
}

const test1 = new Test();
// Calling the method on the instance
test1.testFunc(); // 

// Calling the method outside the class
const test1Func = test1.testFunc;
console.log(test1Func, 14);
test1Func(); // 

// Calling the method as a callback
setTimeout(test1.testFunc, 1000); // 

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
someFunc(); // 
```

---

## Context Project Pair Programming
- If you finish phase 3:
  - PAUSE
  - Start on the homework early
