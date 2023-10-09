import { Router } from "express";


const endpoints = Router()


endpoints.put('/media/:id', async (req,resp)=>{

    try {
        const {id} = req.params
        const media = req.body

        

    } catch (err) {
        resp.status(400).send({erro:err.message})
    }
})