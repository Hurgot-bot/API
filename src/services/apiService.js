const db = require('../db')




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
            db.query('select coalesce(count(email)=1,1,0) as counter from deshah where email = ? ', [email],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    //console.log(email,String(results[0]));
                    aceito(results[0].counter);
                    
                }
            );
        });//select coalesce(count(email)>0) as counter from deshah where email != ? 
    },//select coalesce(count(email)>0) as counter from deshah where email != ? 
}