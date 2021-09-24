const apiService = require('../services/apiService');

module.exports = {
    buscarTudo: async(req, res) => {
        let json = { error: '', result: [] }

        let result = await apiService.buscarTudo();

        for (let i in result) {
            json.result.push({
                nome: result[i].nome,
                email: result[i].email
            });
        }

        res.json(json);
    },

    registrar: async(req, res) => {
        let json = { error: '', result: [] }

        let email = req.body.email;
        let senha = req.body.senha;
        const crypto = require('crypto');
        const alg = 'aes-256-ctr';
        const pwd = 'abcdabcd';

        const cipher = crypto.createCipheriv(alg, pwd);
        const crypted = cipher.update(senha, 'utf8', 'hex');

        //const decipher = crypto.createDecipheriv(alg,pwd);

        if (email && senha) {
            let codigoRes = await apiService.registrar(email, crypted);
            json.result = {
                codigo: codigoRes,
                email,
                senha
            }
        } else {
            json.error = "Campos nao enviados"
        }

        res.json(json);
    }
}