window.onload = () =>{
    // console.log('ell=o')


    let alert = document.getElementById('alert-button')
    alert.addEventListener('click', event =>{
        window.alert('I AM AN ALERT BUTTON!!!')
    })
    let confirm = document.getElementById('confirm-button')
    confirm.addEventListener('click', event =>{
        let confirm = window.confirm('Hey I am the confirm method button')
        window.alert(confirm)
    })
    let prompt = document.getElementById('prompt-button')
    prompt.addEventListener('click', event =>{
        //! prompt method returns the user input!
        let inputted = window.prompt('Hey I am the prompt method')

        window.alert(inputted)

    })
    let open = document.getElementById('open')
    open.addEventListener('click', event =>{
        window.open('./open.html')
    })


    let ulExample = document.getElementById('node-example')

    let ulChildren = ulExample.children

    let firstLi = ulChildren[0]


    firstLi.innerText = 'edited text through javascript'

    console.log(ulChildren);
    console.log(firstLi);
}
