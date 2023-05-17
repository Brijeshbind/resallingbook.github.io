
const http = require('http');
const express=require('express')
const app=express();
const fs=require('fs');
const path=require('path')
const home=fs.readFileSync("./public/index.html");
const sell=fs.readFileSync("./public/sell.html");
const kart=fs.readFileSync("./public/kart.html");
const profile=fs.readFileSync("./public/profile.html");
const hostname = '127.0.0.1';
const port = 3000;

console.log(__dirname,"/public");
app.use('/public',express.static('public'));
const server = http.createServer((req, res) => {
  // console.log(url.req)
  url=req.url
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');
  if (url=='/') {
    
    res.end(home);
  }
  else if (url=='/sell') {
    res.end(sell);
  }
  else if (url=='/kart') {
    res.end(kart);
  }
  else if (url=='/profile') {
    res.end(profile);
  }
  else{
    res.statusCode=404;
    res.end(`<br> <h1>result is not Found</h1>`);
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

































































































// function login() {
//     var username=document.getElementById("username").value;
//     var password=document.getElementById("username").value;

//     if (username=="" || password=="") {
//       document.getElementById("message").innerHTML="Plz Enter both username and password";
//     }

//     else if (username=="brijeshbind0671" && password=="826456801") {
//       document.getElementById("message").innerHTML="Login successfuly";
//     }

//    else  {
//       document.getElementById("message").innerHTML="invalid username and password";
//     }


//   }