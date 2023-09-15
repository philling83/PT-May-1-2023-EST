export function getAllDogs() {
    return fetch('/dogs')
}

export function getDogNumberTwo() {
   return fetch('/dogs/2')
}

export function postNewDog() {
    const urlParams = new URLSearchParams({
        name : "dogg",
        age : 0
    })
    console.log(urlParams.toString())

    return fetch('/dogs',{
        method : 'POST',
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: urlParams
    })

}

export function postNewDogV2(name, age) {
    const urlParams = new URLSearchParams({
        name : name,
        age : age
    })
    // console.log(urlParams.toString())

    return fetch('/dogs',{
        method : 'POST',
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: urlParams
    })
}

export function deleteDog(id) {
      return fetch(`/dogs/${id}/delete`, {
        method : "POST",
        headers : {
            "AUTH" : "ckyut5wau0000jyv5bsrud90y"
        }
      })
}
