const express = require ('express');
const { appendFile } = require('fs');
const { request } = require('http');
const Server = express()
Server.use('/images', express.static('images'));
Server.use('/public',express.static("public")); 


try {
    Server.set('view engine','ejs')//EJS
} catch (error) {
    console.log((error));
}




let port = process.env.PORT || '5051'
let host = process.env.HOST

Server.get('/', function(req, res) {
    res.render('Home');
  });
 
  Server.get('/Information', function(req, res) {
    res.render('../views/Information');
  });

  Server.get('/Projects', function(req, res) {
    res.render('../views/Projects');
  });

  Server.get('/ContactForm', function(req, res) {
    res.render('../views/ContactForm');
  });


Server.listen(port , host, ()=>{
    
})