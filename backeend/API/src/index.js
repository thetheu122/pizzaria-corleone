import 'dotenv/config';

import  express  from 'express';
import  cors     from 'cors'


// import endpoints
import tipo from './controller/tipoprodutocontroller.js'
import comentario from './controller/comentario.js'


const server = express()
server.use(cors())
server.use(express.json())


server.use(tipo)
server.use(comentario)




server.listen ( process.env.PORT , ()=>{
    console.log(` A API esta online na porta ${process.env.PORT}`)
})
