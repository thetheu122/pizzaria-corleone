import { Router } from "express";
import { loginadm } from "../repository/usuariorepository.js";


const server = Router();

server.put('/usuarioadm/login', async (req, resp)=>{

    try{
      const{nome,email, senha, cnpj}= req.body;
      const resposta =await loginadm(nome, email, senha, cnpj)
      if(!resposta){
        throw new Error ('credenciais inválidas')
      }
      resp.send(resposta)
    }catch(err){
      resp.status(400).send({
        erro: err.message
      })
    }
  
  })