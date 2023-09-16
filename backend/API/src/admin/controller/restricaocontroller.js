
import  { Router } from "express";

import { 
         alterartipo, 
         deletartipo, 
         inserirtipoproduto, 
         listartipo, 
         verificar 
       }
from "../repository/tipoprodutorepository.js";

const endpoints = Router()

endpoints.post( '/tipo' , async (req , resp) =>{

    try {
        
      const  {tipo} = req.body

      if( !tipo){
       resp.status(400).send({erro:' é necessario prencher todos os campos'})
      }
      
      else{
        const existente = await verificar(tipo)

        if( existente ){
          resp.status(400).send({erro: 'Tipo de produto ja encontrado'})
        }
        else{
          
          const resposta = await inserirtipoproduto(tipo)
          resp.send(resposta)
        }
       
      }
      
    }

    catch (err) {
        resp.status(400).send({erro: err.message})
    }

})




endpoints.get( '/listar/tipo' , async (req,resp) =>{

  try {
    
    const resposta = await listartipo()
    resp.send(resposta)

  } 
  
    catch (err) {
    resp.status(400).send({erro:err.message})
  }
})

endpoints.put ('/tipo/alterar/:id', async (req,resp) =>{

  try {

      const {id} = req.params
      const {tipo} = req.body
    
    
    if( !tipo){
        resp.status(400).send({erro:' é necessario prencher todos os campos'})
     }

     else{
      const existente = await verificar(tipo)
          if( existente ){
            resp.status(400).send({erro: 'Tipo de produto ja encontrado'})
          }

          else{
            const resposta = await alterartipo(id , tipo)
            if( resposta == 1)
            resp.status(200).send({message: ' pedido alterado com sucesso'})
            resp.send(resposta)
          }
      }

     }
    

  catch (err) {
    resp.status(400).send({erro:err.message})
  }

})



endpoints.delete( '/tipo/:id' , async (req, resp) =>{
  
  try {
    
   const {id} = req.params
   const resposta = await deletartipo(id)

   if( resposta ===1){
    resp.status(200).send({message:" Tipo excluido com sucesso "})
   }

   else {
     resp.status(400).send({erro:"Tipo não encontrado"})
   }

    
  } catch (err) {
    resp.status(400).send({erro:err.message})
  }

})

export default endpoints