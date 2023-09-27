import { Router } from "express";
import { inserirCliente, loginCliente } from "../repository/clienteRepository.js";

const server = Router()

server.post('/cliente/cadastro', async (req, resp) => {
    try {
        let resposta = req.body;

        if (!resposta) {
            throw new Error("Os dados do cadastro está faltando");
        }
    
        const camposObrigatorios = [
            "endereco",
            "cliente",
            "email",
            "telefone",
            "senha",
            "cpf",
            "nascimento"
        ];
    
        const camposFaltando = [];
    
        camposObrigatorios.forEach((campo) => {
            if (!(campo in resposta) || !resposta[campo]) {
                camposFaltando.push(campo);
            }
        });
    
        if (camposFaltando.length > 0) {
            const mensagemErro = `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`;
            throw new Error(mensagemErro);
        }
    
        let respo = await inserirCliente(resposta);

        resp.status(200).send(respo);
    } catch (err) {
        resp.status(404).send(err.message);
    }
    

})

server.get('/cliente/login', async (req, resp) => {
    try {
        let email = req.query.email;
        let senha = req.query.senha;

        const camposFaltando = [];
       
        if (camposFaltando.length > 0) {
            const mensagemErro = `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`;
            throw new Error(mensagemErro);
        }

        let respo = await loginCliente(email, senha)

        if(!respo){
            throw new Error('Credenciais inválidas');
        }

        resp.status(200).send(respo)
    } catch (err) {
        resp.status(404).send(err.message)
    }
});

export default server;



