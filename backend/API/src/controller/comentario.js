import  { Router } from "express";
import { inserircometario, listarcomentario } from "../repository/comentariorepository.js";


const endpoints = Router()


endpoints.post( '/comentario' , async (req , resp ) =>{

    try {
        const  {comentario}  = req.body;
      
        if (!comentario.comentario) {
          resp.status(400).send({ err: 'É necessário preencher todos os campos' });
        } 
        else {
          const resposta = await inserircometario({comentario}); // Passa diretamente o texto do comentário
          resp.send(resposta);
        }
      } catch (err) {
        resp.status(400).send({ err: err.message });
      }
      
    

})



endpoints.get( '/listar/comentario' , async (req,resp) =>{

    try {
      
      const resposta = await listarcomentario()
      resp.send(resposta)
  
    } 
    
      catch (err) {
      resp.status(400).send({erro:err.message})
    }
  })

export default endpoints