# `M2W4D4`

## Sets

A set is a math term that means a collection of distinct elements. In computer
science a set is a collection of unique and unordered values.

Properties of a set:

- A set does not contain duplicate elements.
- A set does not have ordered elements (like an object)
- A set can check for an element in O(1) time. (this is the biggest benefit over
  an array)

Commonly used Set methods:

- has: checks if a value exists in the set
- add: adds an element to a set
- delete: removes an element from a set

```js
//Example of set lookup efficiency


const rand = (size) => [...Array(size)].map(() => Math.floor(Math.random() * size));

const small = rand(100);
const medium = rand(5_000);
const large = rand(100_000);
const huge = rand(1_000_000)

const solution1 = arr => {
  console.time('Array.includes');
  for (let int = 1;;int++) {
    if (!arr.includes(int)) {
      console.timeEnd('Array.includes');
      return int;
    }
  }
}

const solution2 = set => {
  console.time('Set.has');
  for (let i = 1;;i++) {
    if (!set.has(i)) {
      console.timeEnd('Set.has');
      return i
    }
  }
}

console.log('Testing small');
solution1(small);
solution2(new Set(small));
console.log('----')

console.log('Testing medium');
solution1(medium);
solution2(new Set(medium));
console.log('----')

console.log('Testing large');
solution1(large);
solution2(new Set(large))
console.log('----')

console.log('testing huge')
solution1(huge);
solution2(new Set(huge));

```

---

## Caching

Caching is a commonly used way of increasing performance, where you store
computed values so that you don't need to calculate those values multiple times.

An example of caching that you are familiar with is the `array.length` property.
That property is not calculated when you request is its value, it is cached and
updated, which is what allows a `.length` check to count `n` values in `O(1)`
time.

- Memoization: Caching results of recursive function calls so that they dont need
to be repeated, from the top down.
- Tabulation: Caching results of iterative function, from the bottom up.

Both Memoization and Tabulation are forms of dynamic programming. Which means
solving a sub-problems once and then using those solutions to solve the main
problem. Don't worry about the names and the differences, what's important is
understanding that all of this is caching.

```js
//Caching example, creating a memo cache, memoization

let count = 0
let cache = {1: 0, 2: 1};

function fib(n) {
  count++
  console.log(`Running fib(${n})`);
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fib(n-1) + fib(n-2);
}


function fibMemo(n) {
  count++
  console.log(`Running fibMemo(${n})`);

  if (cache[n] === undefined) {
    cache[n] = fibMemo(n-1) + fibMemo(n-2);
  }

  console.log(cache);
  return cache[n];
}

console.log(fib(10));
// console.log(fibMemo(10));
console.log("count of calls fib: ", count)

function fibTab(n) {
  for (let i = 3 ; i <= n ; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }

  return cache[n];
}
```
