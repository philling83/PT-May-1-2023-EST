# `Weeks 9 + 10 Study Guide`

- Understanding difference between worst, average, best case
- Given a function, determine the Big O: time complexity for it (big O of...)
	- know the different time complexity for Big O.
- Understand different base counting systems 
	- base 2 (binary)
	- base 10 (decimal)
	- base 16 (hexademical)
- Be able to convert the different base systems
	- binary to decimal
	- hexadecimal to decimal
  - decimal to ascii
  - binary to ascii
  - hexadecimal to ascii
- Basic understanding of the stack
- Understanding Arrays
  - Traditional Arrays
    - An `array` is a `sequence of elements` of the `SAME TYPE` `stored in a contiguous block of memory`.
    - traditional arrays can only hold like or similar datatypes (c++ strict type for arrays)
    - `.push` method
  - [Dynamic Arrays (Javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)
    - Dynamic arrays like in JavaScript array are resizable and can contain a mix of different data types (sorta, see next point). 
    - JS Array contains `pointers` (memory address) at each index that will point to different data. there `pointers` are all the same datatype but it points to different datatypes at runtime.
    - Dynamic Arrays `.push` time complexity is `O(n)` when resizing.
      - because of automatic resizing when more elements get added, it will create a new array and copy the old elements over to the bigger array. (This becomes `O(n)` time)
      - Once in a while, it will have a bad time complexity.
- Define bits, bytes, kilobytes, megabytes, gigabytes and their conversion
  - 1 byte = 8 bits
  - 1 kilobyte = 1000 bytes
  - 1 megabyte = 1000 kilobytes (1million bytes)
- Understand that `pointers` represent an address or indexed location in memory.  
- Truth table conversion
- Linked lists, hash tables, queues, arrays
- Doubly vs. Singly linked list operations and time complexity
- Understanding Hash Collision
  - i.e. what happens when 2 different keys, after going through a hash function/modulo, have the same hash output?
- Time complexity (average and worst) of hash table operations, linked lists operations,
  - i.e. operations like remove, insert, lookup, etc.

- Coding Portion: Analyze and Refactor
  - Polya's Plan
    - Understand the prompt. Read the code and see what it is doing
    - Make a plan, add comments to reflect what the code should do
    - Execute
  - Given the wrong or slow usage of a data structure for the code, determine which other data structure(s) is better fit for the job
	- Apply that data structure (changing it from the old to the new)
	- Refactor the code to make it work w/ new data structure (apply the new data structure's methods over the old ones)
    - Data structures that we should have familiarity with (don't have to build it, but know how to use it)
    - Queues (implemented through linked list)
    - Sets
  	- Arrays
  	- Linked Lists