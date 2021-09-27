const apiService = require('../services/apiService');
const bcrypt = require('bcrypt');

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
        
        try{
            senha = await bcrypt.hash(senha,10);
            
        }catch{
            res.status(500).send();
        }

        //const decipher = crypto.createDecipheriv(alg,pwd);

        if (email && senha) {
            let codigoRes = await apiService.registrar(email, senha);
            json.result = {
                codigo: codigoRes,
                email,
                senha
            }
        } else {
            json.error = "Campos nao enviados"
        }

        res.json(json);
    },

    login: async(req,res) =>{
        console.log("called request")
        let json = { error: '', result: [] }

        let email = req.body.email;
        let senha = req.body.senha;
        let message = "Success"
        
        if (email && senha) {
            result = await apiService.verify(email,senha);
            console.log(result.counter +" - " +result.senha);
            if(result.counter==0){
                message = "email Invalido"
            }else{
                senhaCorreta = await bcrypt.compare(senha,result.senha);
                if(senhaCorreta==false){
                    message = "senha incorreta"
                }
            }

        } else {
            json.error = "Campos nao enviados"
        }


        json.result = {
            mensagem : message
        }
        res.json(json);
    }
}

