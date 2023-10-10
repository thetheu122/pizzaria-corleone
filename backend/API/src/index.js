import 'dotenv/config';

import  express  from 'express';
import  cors     from 'cors'


// import endpoints
import tipo       from './admin/controller/tipoprodutocontroller.js'
import comentario from './user/controller/comentarioController.js'
import endereco   from './user/controller/enderecoController.js'
import cliente    from './user/controller/clienteController.js'
import restricao  from'./admin/controller/restricaocontroller.js'
import produto    from './admin/controller/produtocontroller.js'
import usuario    from './admin/controller/usuariocontroler.js'
import avaliacao  from './user/controller/avaliacao.js'
import media      from './user/controller/media.js';


const server = express()
server.use(cors())
server.use(express.json())

server.use('/storage/produto', express.static('storage/produto'));


server.use(tipo)
server.use(comentario)
server.use(endereco)
server.use(cliente)
server.use(restricao)
server.use(produto)
server.use(usuario)
server.use(avaliacao)
server.use(media)



server.listen ( process.env.PORT , ()=>{
    console.log(` A API esta online na porta ${process.env.PORT}`)
})
