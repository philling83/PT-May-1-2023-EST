window.onload = () =>{

    const addButton = document.getElementById('add')

    addButton.addEventListener('click', event=>{
        //* select the parent node IE the ul element
        const shoppingList = document.getElementById('shopping-list')

        //* select the select input
        const selectInput = document.getElementById('type')

        //* select the text input
        const input = document.getElementById('name')

        // console.log(selectInput.selectedOptions[0].text.toLowerCase())

        //* create a new div to hold the name of input
        const divName = document.createElement('div')

        //* change inner text of new div to the text input value
        divName.innerText = input.value

        //* create new li ele to hold div with name
        const newLi = document.createElement('li')

        //* append the name div to the list element
        newLi.appendChild(divName)

        //! set data attribute here

        //! to store data, use data-"name of data" as first arguement, followed by the value.
        newLi.setAttribute('data-type', selectInput.selectedOptions[0].text.toLowerCase())

        //* append the new li ele to the ul
        shoppingList.appendChild(newLi)


        //* prevent default behavior of button
        event.preventDefault()


    })
}
