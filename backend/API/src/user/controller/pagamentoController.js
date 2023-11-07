import { Router } from "express";
import { inserirCartao, validarDadosCartao, listarTodosCartoes, listarCartaoPorId } from "../repository/pagamentoRepository.js";

const endpoints = Router()

endpoints.post('/cartao/inserir', async (req, resp) => {
    try {
        let dados = req.body
        let { id } = req.query

        validarDadosCartao(dados)

        let response = await inserirCartao(dados)

        resp.status(200).send(response)
    } catch (error) {
        resp.status(400).send(error)
    }

})

endpoints.get('/cartao/listar', async (req, resp) => {
    try {
        const cartoes = await listarTodosCartoes(); 

        resp.status(200).send(cartoes);
    } catch (error) {
        resp.status(500).send('Erro interno do servidor');
    }
});



endpoints.get('/cartao/listar/:id', async (req, resp) => {
    try {
        const id = req.params.id; 

        const cartao = await listarCartaoPorId(id); 
        if (cartao) {
            resp.status(200).send(cartao); 
        } else {
            resp.status(404).send('Cartão não encontrado'); 
        }
    } catch (error) {
        resp.status(500).send('Erro interno do servidor');
    }
});





export default endpoints