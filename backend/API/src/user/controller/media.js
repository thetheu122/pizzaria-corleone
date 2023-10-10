import { Router } from "express";
import { alteraramedia } from "../repository/media.js";


const endpoints = Router()


endpoints.put('/media/:id', async (req,resp)=>{

    try {
        const {id} = req.params
        const media = req.body

         const resposta = await alteraramedia(media , id)
         resp.send(resposta)

    } catch (err) {
        resp.status(400).send({erro:err.message})
    }
})


export default endpoints