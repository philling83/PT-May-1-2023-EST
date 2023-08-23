const urlParams = new URLSearchParams({
    name : "dawgo",
    color : "brown",
    age : 2,
    description: "a smol dog"
})

fetch('/dog',{
    method : "POST",
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body: urlParams
})
