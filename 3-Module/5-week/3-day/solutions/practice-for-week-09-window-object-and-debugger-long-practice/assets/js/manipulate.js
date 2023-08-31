export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    document.title = "Alan's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    let bigHeader = document.querySelector('h1')
    bigHeader.innerText = 'I am Alan De Leon'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    let pAbout = document.querySelector('.section > p')
    pAbout.innerText= 'I am Alan I am an Junior Instructor at AppAcademy!'
}
