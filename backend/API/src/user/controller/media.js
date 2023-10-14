import { Router } from "express";
import { alteraramedia, inserirmedia } from "../repository/media.js";


const endpoints = Router()

endpoints.post ( '/media' , async (req,resp) =>{
    try {
        const media = req.body
        const resposta = await inserirmedia(media)
        console.log(media)

        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({erro:err.message})
    }
})

endpoints.put('/media/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const media = req.body;
        const resposta = await alteraramedia(media, id);
        resp.sendStatus(200).send(resposta); // Ou qualquer outro código de status que você desejar
    } catch (err) {
        resp.status(400).send({ erro: 'mensagem de erro' });
    }
});


export default endpoints