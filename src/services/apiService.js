const db = require('../db')
const bcrypt = require('bcrypt');



module.exports = {
    buscarTudo: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * from deshah', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });

        });
    },

    registrar: (email, senha) => {
        


        return new Promise((aceito, rejeitado) => {
            db.query('insert into deshah (email,senha) values(?,?)', [email, senha],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertCodigo)
                }
            );
        });
    },

    verify: (email, senha) => {
        

        
        return new Promise((aceito, rejeitado) => {
            db.query('select coalesce(count(email)=1,1,0) as counter,senha from deshah where email = ? ', [email],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results[0]);
                    
                }
            );
        });
    }
}