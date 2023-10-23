import { Router } from "express";
import { ListarCardapio } from "../repository/produtoRepository.js";

let endpoint = Router()

endpoint.get('/produto/consulta/cardapio', async (req, resp) => {
    try {
        let { tp, restricao_1, restricao_2, restricao_3, nm, orderby } = req.query

        if(restricao_1 === '' || restricao_1 === undefined)
            restricao_1 = '%'
        if(restricao_2 === '' || restricao_2 === undefined)
            restricao_2 = '%'
        if(restricao_3 === '' || restricao_3 === undefined)
            restricao_3 = '%'

        if(!nm)
            nm = '%'
        else if(nm !== '')
            nm = '%' + nm + '%' 

        if(tp === '')
            tp = '%'
        if(orderby === '')
            orderby = 'null'

        let response = await ListarCardapio(tp, restricao_1, restricao_2, restricao_3, nm, orderby)

        resp.status(200).send(response)
        
    } catch (error) {
        resp.status(400).send(error.message)  
    }
})


export default endpoint