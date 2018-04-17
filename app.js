var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/catologo',function(req,res){
    res.render("roldanas/catalogo");
});
app.listen(3000, function(){
    console.log("Roldanos rodando!");
});