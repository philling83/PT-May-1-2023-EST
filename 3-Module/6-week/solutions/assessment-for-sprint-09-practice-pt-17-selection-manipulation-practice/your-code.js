/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

let squareOne = document.getElementById('problem-one')
let oneButton = document.createElement('button')
oneButton.innerText = '1'

squareOne.innerText = ''

squareOne.appendChild(oneButton)


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

let squareTwo = document.querySelector('.two')

squareTwo.style.backgroundColor = 'orange'
squareTwo.style.color = 'white'
squareTwo.style.border = 'black dashed 5px'


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

let plusSquares = document.querySelectorAll('.plus')

for (let i = 0; i < plusSquares.length; i++) {
    let el = plusSquares[i]
    el.style.width = '100px'
    el.style.fontSize = '60px'
}

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

let squareFour = document.querySelector('.four')

squareFour.setAttribute('id', 'problem-four')

squareFour.classList.remove('square')
squareFour.classList.add('round')

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Alan's solution
let rootChildren = document.getElementById('root').children
let fifthSquare = rootChildren[4]
fifthSquare.classList.add('minus')

let minusSquares = document.querySelectorAll('.minus')

for (let el of minusSquares) {
    el.remove()
}

// Phil's Solution
// const squares = document.querySelectorAll('.square');
// squares.forEach((square, i) => {
//     if (i >= 3 && i <= 5) {
//         square.remove();
//     };
// });









