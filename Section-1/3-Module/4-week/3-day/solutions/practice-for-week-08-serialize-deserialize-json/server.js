const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is
      // application/json
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded
      if (reqBody) {
        // req.body = reqBody
        // .split("&")
        // .map((keyValuePair) => keyValuePair.split("="))
        // .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        // .map(([key, value]) => [key, decodeURIComponent(value)])
        // .reduce((acc, [key, value]) => {
        //   acc[key] = value;
        //   return acc;
        // }, {});
        switch(req.headers['content-type']){
          case 'application/json':
            req.body = JSON.parse(reqBody)
            break;
          case 'application/x-www-form-urlencoded':
            req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        }
        // Log the body of the request to the terminal
        console.log(req.headers['content-type'],req.body);
      }


    const resBody = {
      "Hello": "World!"
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(resBody))
    res.end()
    return
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
