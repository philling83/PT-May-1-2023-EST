# Fetch
- At a high level, fetch is used to make HTTP requests on the browser. It uses Promises to handle the asynchronous nature of HTTP requests and responses. fetch is used to formulate and send a request to a server and read the server response.

- Since the fetch API is provided by almost all major browsers, you can use the fetch API by opening up the "Console" tab in Chrome or Firefox to use the built-in fetch function.

## fetch syntax
fetch('URL', {options}) -> returns a promise

## Example of fetch with get
```
fetch('/dogs') // notice that we can ommit the options argument!
.then(res =>{ // in this case res represents the response from the server!
    console.log(res.status)
})

```

## Exmaple of fetch with post
```
fetch('/dogs',{  //in most cases with post we need to add the options object arg.
    method : "POST"
    headers: {
        "Content-Type" : "application/json"
    }
    body: {
        some data (keep in mind, depending on the server, we need to format this body correctly)
    }
})

```
