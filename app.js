var app = require('./config/express')();

var roldanaRoutes = require("./app/routes/catalogo")(app);

app.listen(3000, function(){
    console.log("Roldanos rodando!");
});