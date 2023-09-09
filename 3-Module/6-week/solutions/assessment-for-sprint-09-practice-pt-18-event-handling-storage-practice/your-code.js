window.addEventListener("DOMContentLoaded", () => {
  problemOne()
  problemTwo()
  problemThree()
  problemFour()
  problemFive()
  problemSix()
  problemSeven()
  problemEight()
  problemNine()
});

const problemOne = () => {
  let button = document.getElementById('make-circle-blue')
  let circle = document.getElementById('blue-border-circle')

  button.addEventListener('click', event => {
    circle.classList.add('blue-fill')

  })
}

const problemTwo = () => {
  const checkBox = document.getElementById('will-not-check')

  checkBox.addEventListener('click', event => {
    event.preventDefault();
  })

}

const problemThree = () => {
  const bananaButton = document.getElementById('change-bananas-status')
  const bananaText = document.getElementById('bananas-div')
  const bananaImgDiv = document.getElementById('bananas-image-div')

  bananaButton.addEventListener('click', event => {
    bananaText.innerText = 'No Bananas Today!'

    if (bananaImgDiv.children.length < 1) {
      const noBananaImg = document.createElement('img')
      noBananaImg.setAttribute('src', './images/no-bananas.png')

      bananaImgDiv.appendChild(noBananaImg)

    }


  })

}

const problemFour = () => {
  const textInput = document.getElementById('fav-cookie')
  const cookieButton = document.getElementById('store-cookie')

  cookieButton.addEventListener('click', event => {
    document.cookie = `favCookie=${textInput.value}`
  })

  let cookies = document.cookie.split('; ')

  let matchingCookie = cookies.find(el => el.indexOf('favCookie=') === 0)

  if (matchingCookie) {
    textInput.value = matchingCookie.split('=')[1]
  }

}

const problemFive = () => {
  const pieList = document.querySelector('.pie-list')
  const pieInput = document.getElementById('pie-type')
  const submitPie = document.getElementById('save-pie')

  submitPie.addEventListener('click', event => {
    let pie = pieInput.value.trim()
    if (pie && pieList.children.length < 5) {
      const liPie = document.createElement('li')
      liPie.innerText = pie
      pieList.appendChild(liPie)
      pieInput.value = ''
    }
  })
}


const problemSix = () => {
  const iceInput = document.getElementById('fav-ice-cream')
  const iceButton = document.getElementById('save-ice-cream')

  iceButton.addEventListener('click', event => {
    let iceCream = iceInput.value.trim()

    if (iceCream) {
      localStorage.setItem('iceCream', iceCream)
      iceInput.value = ''
    }
  })

  if (localStorage.getItem('iceCream')) {
    iceInput.value = localStorage.getItem('iceCream')
  }
}

const problemSeven = () => {

  // Alan's solution
  const appleButton = document.getElementById('add-apple')
  const orangeButton = document.getElementById('add-orange')
  const emptyButton = document.getElementById('reset-basket')
  const basket = document.getElementById('fruit-storage')
  const fruitNum = document.getElementById('total-fruit')
  let totalFruit = 0;

  appleButton.fruit = 'apple'
  orangeButton.fruit = 'orange'

  const handleAdd = (event) => {
    if (basket.innerText.length < 50) {

      if (event.target.fruit === 'apple') {
        basket.innerText += `🍎`
        totalFruit += 1
      }
      else {
        basket.innerText += '🍊'
        totalFruit += 1
      }
      fruitNum.innerText = totalFruit
    }
  }

  appleButton.addEventListener('click', handleAdd)
  orangeButton.addEventListener('click', handleAdd)

  emptyButton.addEventListener('click', event => {
    basket.innerText = ''
    fruitNum.innerText = '0'
    totalFruit = 0
  })

  // Phil's solution
  // const fruitBtns = document.getElementById("fruit-buttons-div");
  // const basketDiv = document.getElementById("fruit-storage");
  // const totalFruit = document.getElementById("total-fruit");
  // const fruitCollection = basketDiv.childNodes;
  // let counter = 0;
  // totalFruit.innerText = counter;

  // fruitBtns.addEventListener("click", (e) => {
  //   if (fruitCollection.length < 25) {
  //     if (e.target.id === "add-apple") {
  //       basketDiv.append("🍎");
  //       totalFruit.innerText = `${++counter}`;
  //     } else if (e.target.id === "add-orange") {
  //       basketDiv.append("🍊");
  //       totalFruit.innerText = `${++counter}`;
  //     } else if (e.target.id === "reset-basket") {
  //       basketDiv.innerHTML = "";
  //       counter = 0;
  //       totalFruit.innerText = counter;
  //     };
  //   };
  // });
};

const problemEight = () => {
  const bubbleButton = document.getElementById('bubble-maker')

  bubbleButton.addEventListener('click', event => {
    event.stopPropagation()
  })
}


const problemNine = () => {
  const fetchButton = document.getElementById('dictionary-fetch')
  const resArea = document.getElementById('results-area')
  const fetchList = document.createElement('ul')

  resArea.appendChild(fetchList)

  fetchButton.addEventListener('click', event => {
    const liWord = document.createElement('li')
    const liDef = document.createElement('li')

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
      .then(res => res.json())
      .then(jsonBody => {
        // console.log(jsonBody[0].meanings[0].definitions[0].definition);
        let definition = jsonBody[0].meanings[0].definitions[0].definition
        liWord.innerText = `Word: ${jsonBody[0].word}`
        liDef.innerText = `Definition: ${definition}`

        liWord.style.color = 'red'
        liDef.style.color = 'blue'

        fetchList.appendChild(liWord)
        fetchList.appendChild(liDef)
      })
  })
}