import { Router } from "express";
import { sugestoesBebida, sugestoesPizza, sugestoesSobremesa } from "../repository/sugestao.js";


const endpoints = Router()

endpoints.get ( '/corleone/sugestao/pizza/:id' , async (req,resp)=>{
    try {
        const {id} = req.params;
        const resposta = await sugestoesPizza(id)

        resp.send(resposta)
    } catch (errr) {
        resp.status(400).send({erro:errr.message})
    }
})

endpoints.get ( '/corleone/sugestao/bebida/:id' , async (req,resp)=>{
    try {
        const {id}= req.params;
        const resposta = await sugestoesBebida(id)

        resp.send(resposta)
    } catch (errr) {
        resp.status(400).send({erro:errr.message})
    }
})

endpoints.get ( '/corleone/sugestao/sobremesa/:id' , async (req,resp)=>{
    try {
        const {id} = req.params;
        const resposta = await sugestoesSobremesa(id)

        resp.send(resposta)
    } catch (errr) {
        resp.status(400).send({erro:errr.message})
    }
})

export default endpoints