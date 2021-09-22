const db = require('../db')

module.exports = {
    buscarTudo: () =>{
        return new Promise((aceito,rejeitado) =>{
            db.query('SELECT * from actors',(error,results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
            
        });
    }
};