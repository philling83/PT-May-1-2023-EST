window.addEventListener('DOMContentLoaded', event =>{

    const parentDiv = document.querySelector('.parent-div')


    //! added an event listener to the parent div. None of the child
    //! divs have any eventlisteners added, the click event bubbles up
    //! and fires the parent div event listener

    parentDiv.addEventListener('click', event =>{
        console.log('I FIRED AN EVENT AS THE PARENT DIV!!!')
        console.log(`CLICKED THIS DIV : ${event.target.innerText}`)

    })

    const childDiv = document.querySelector('.stop-bubble')

    childDiv.addEventListener('click', event =>{
        console.log("YOU CLICKED MY EVENT I AM A CHILD OF THAT PARENT DIV!!! MY EVENT WILL NOT BUBBLE UP!");

        //! STOP propogation
        event.stopPropagation()
    })


    const list = document.querySelector('.test-list')

    //! event listener added on parent list element
    //! because of propogation I dont need to add listeners to each of the children

    list.addEventListener('click', event =>{
        // console.log(`${event.target.innerText}`);
        const label = document.querySelector('.label')

        //! event target is essentially the element that cause the event to go off.
        //! in this case, the element we clicked.
        label.innerText = event.target.innerText
    })


    const testButton = document.querySelector('.test-button')

    testButton.addEventListener('click', event =>{
        console.log('test')
        event.preventDefault()
    })


})
