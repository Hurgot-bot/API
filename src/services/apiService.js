const db = require('../db')

module.exports = {
    buscarTudo: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * from actors', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });

        });
    },

    registrar: (email, senha) => {



        return new Promise((aceito, rejeitado) => {
            db.query('insert into fornecedores (email,senha) values(?,?)', [email, senha],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertCodigo)
                }
            );
        });
    }
}