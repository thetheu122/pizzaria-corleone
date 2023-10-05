import { Router } from "express";
import { infoCLiente, inserirCliente, loginCliente } from "../repository/clienteRepository.js";

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
        })
    
        if (camposFaltando.length > 0) {
            const mensagemErro = `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`;
            throw new Error(mensagemErro);
        }
    
        let respo = await inserirCliente(resposta)

        if (respo === `122`) {
            const mensErro = 'Já existe cliente com essas credenciais';
            throw new Error(mensErro);
        } else {
            resp.status(200).send(respo);
        }
    } catch (err) {
        resp.status(404).send(err.message)
    }
    

})

server.post('/cliente/login', async (req, resp) => {
    try {
       
        const {email, senha} = req.body

        if(!email)
            throw new Error('Campo do email vazio');
        if(!senha)
            throw new Error('Campo da senha vazio');

        let respo = await loginCliente(email, senha)

        if(!respo)
            throw new Error('Credenciais inválidas');
        

        resp.status(200).send(respo)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.get('/cliente/info', async (req, resp) => {
    try {
        let id = req.query.id;

        let respo = await infoCLiente(id)

        if(!respo){
            throw new Error('Credenciais inválidas');
        }

        resp.status(200).send(respo)
    } catch (err) {
        resp.status(404).send(err.message)
    }
});



export default server;