import { Router } from "express";
import { ListarCardapio } from "../repository/produtoRepository.js";

let endpoint = Router()

endpoint.get('/produto/consulta/cardapio', async (req, resp) => {
    try {
        let dados = req.body

        if(dados.restricao_1 === '' || dados.restricao_1 === undefined)
            dados.restricao_1 = '%'
        if(dados.restricao_2 === '' || dados.restricao_2 === undefined)
            dados.restricao_2 = '%'
        if(dados.restricao_3 === '' || dados.restricao_3 === undefined)
            dados.restricao_3 = '%'

        if(!dados.nm)
            dados.nm = '%'
        else if(dados.nm !== '')
            dados.nm = '%' + dados.nm + '%' 

        if(dados.tp === '')
            dados.tp = '%'
        if(dados.orderby === '')
            dados.orderby = 'null'

        
            console.log(dados)
    
        let response = await ListarCardapio(dados)
    
        resp.status(200).send(response)
        
        // {
        //     "restricao_1":"ovo",
        //     "restricao_2":"",
        //     "restricao_3":"",	
        //     "nm":"",
        //     "tp":"salgado",
        //     "orderby":"null"
        // }
        
    } catch (error) {
        resp.status(400).send(error.message) 
    }
})


export default endpoint