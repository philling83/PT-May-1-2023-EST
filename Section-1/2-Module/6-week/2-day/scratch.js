const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

// function printBreadthFirst(start) {
//   let queue = [];
//   let visited = new Set();

//   queue.push(start);
//   visited.add(start);

//   let nodes = [];

//   while (queue.length > 0) {
//     let currNode = queue.shift();
//     nodes.push(currNode);

//     adjList[currNode].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor);
//         visited.add(neighbor);
//       };
//     });
//   };

//   return nodes;
// };

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  4, 3, 5, 6, 2, 1

// function printDepthFirst(start) {
//   let stack = [];
//   let visited = new Set();

//   stack.push(start);
//   visited.add(start);

//   while (stack.length > 0) {
//     let currNode = stack.pop();
//     console.log(currNode);

//     adjList[currNode].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         stack.push(neighbor);
//         visited.add(neighbor);
//       };
//     });
//   };
// }

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// // One possible solution:  4, 6, 5, 2, 1, 3

// function breadthFirstSearch(start, end) {
//   let queue = [];
//   let visited = new Set();

//   queue.push(start);
//   visited.add(start);

//   while (queue.length > 0) {
//     let currNode = queue.shift();

//     if (currNode === end) {
//       return true;
//     };

//     adjList[currNode].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor);
//         visited.add(neighbor);
//       };
//     });
//   };

//   return false;
// };

// console.log("First Test:");
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log("Second Test:");
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log("Third Test:");
// console.log(breadthFirstSearch(6, 1)); // -> false

const adjList2 = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

// function aShortestPath(start, end) {
//   let queue = [[start]];
//   let visited = new Set([start]);

//   while (queue.length > 0) {
//     let currPath = queue.shift();
//     let currNode = currPath[currPath.length - 1];

//     if (currNode === end) {
//       return currPath;
//     };

//     adjList2[currNode].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         queue.push([...currPath, neighbor])
//         visited.add(neighbor);
//       };
//     });
//   };

//   return false;
// };

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false

function degreesOfSeparation(start, end) {
  let queue = [[start]];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let currPath = queue.shift();
    let currNode = currPath[currPath.length - 1];

    if (currNode === end) {
      return currPath.length - 1;
    };

    adjList2[currNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor])
        visited.add(neighbor);
      };
    });
  };

  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false