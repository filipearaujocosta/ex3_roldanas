var connectionFactory = require("../infra/connectionFactory");  
module.exports = function(app){  
    app.get('/catalogo',function(req,res){  
        var connection = connectionFactory();         
        connection.query('SELECT * FROM roldanas', function (error, results) {
            if (error) throw error;
            //console.log('Conexão com o banco deu certo: ', results);
            res.render('roldanas/catalogo',{resultsHTML:results});
        });
        connection.end();
    });
}
