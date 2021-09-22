const apiService = require('../services/apiService');

module.exports = {
    buscarTudo: async (req,res) =>{
        let json = {error:'', result:[]}

        let result = await apiService.buscarTudo();

        for(let i in result){
            json.result.push({
                nome: result[i].first_name,
                descricao: result[i].last_name
            });
        }
        
        res.json(json);
    }
}