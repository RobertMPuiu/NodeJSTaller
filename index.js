var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hola, bienvenido al Heading To Codefest');
});

app.get('/saludo',function(req,res){
    let nombre = req.query.nombre;

    if(nombre){
        res.send(`Hola ${nombre}, bienvenido al Heading to Codefest`);
    }
    else {
        res.send('Hola, bienvenido al Heading to Codefest');
    }
});

app.listen(3000,function(){
    console.log('Taller NodeJS app listening on port 3000!');
});