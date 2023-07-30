function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!
    let [row, col] = node

    let currNode = matrix[row][col]

    let neighbors = []

    //! North row - 1, col
    if(row > 0 && Math.abs(currNode - matrix[row - 1][col]) <= 1) neighbors.push([row - 1, col])

    //? North West row - 1, col - 1
    if((row > 0 && col > 0) && (Math.abs(currNode - matrix[row - 1][col - 1]) <= 1 )) neighbors.push([row - 1, col - 1])

    //! West row, col - 1
    if(col > 0 && (Math.abs(currNode - matrix[row][col - 1]) <= 1 )) neighbors.push([row, col - 1])

    //? South West row + 1, col - 1
    if((row < matrix.length - 1 && col > 0) && (Math.abs(currNode - matrix[row + 1][col - 1]) <= 1) ) neighbors.push([row + 1, col - 1])

    //! South row + 1, col
    if(row < matrix.length - 1 && (Math.abs(currNode - matrix[row + 1][col]) <= 1)) neighbors.push([row + 1, col])

    //? South East row + 1, col + 1
    if((row < matrix.length - 1 && col < matrix[row].length - 1) && (Math.abs(currNode - matrix[row + 1][col + 1]) <= 1)) neighbors.push([row + 1, col + 1])

    //! East row, col + 1
    if(col < matrix[row].length - 1 && (Math.abs(currNode - matrix[row][col + 1]) <= 1)) neighbors.push([row, col + 1])

    //? North East row - 1, col + 1
    if((row > 0 && col < matrix[row].length - 1) && (Math.abs(currNode - matrix[row - 1][col + 1]) <= 1)) neighbors.push([row - 1, col + 1])

    return neighbors
}

function pathTraversal(node, matrix, visited, peak) {
    let stack = [node]

    while(stack.length > 0){
        let currNode = stack.pop()
        let [row, col] = currNode
        //! DO THE THING, in this case check if value is equal to the peak.

        if(matrix[row][col] === peak){
            return true
        }

        let nb = findNeighbors(currNode, matrix)

        nb.forEach(el =>{
            if(!visited.has(el.join(','))){
                visited.add(el.join(','))
                stack.push(el)
            }
        })
    }

    return false

}

function identifyPath(mountain) {
    // Find the peak
    let peak = findPeak(mountain)

    // Find the start
    let starts = findStarts(mountain)

    let visited = new Set()

    let correctPath = []

    // Traverse from the starts and try to get to the top
    starts.forEach(start =>{
        if(!visited.has(start.join(','))){
            visited.add(start.join(','))
        }
        if(pathTraversal(start, mountain, visited, peak)){
            correctPath = start
        }
    })

    return correctPath

}

// Uncomment for local testing

// // Example 0
const mountain_0 = [
    [1, 2, 4],
    [4, 5, 9],
    [5, 7, 6]
];

console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
