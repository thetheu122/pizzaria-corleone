import { Router } from 'express';
import {
  inserirProduto,
  listarProdutos,
  atualizarProduto,
  excluirProduto,
  listarprodutoimg,
  imagem
} from '../repository/produtorepository.js';

import multer from 'multer';
const upload = multer({ dest: 'storage/produto' });

const endpoints = Router();



endpoints.post('/produto', async (req, resp) => {
  try {
    const produto = req.body;
     
    console.log(produto)
      const resposta = await inserirProduto(produto);

      resp.send(resposta);
    
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});



endpoints.get('/produto', async (req, resp) => {
  try {

    const produtos = await listarProdutos();
    resp.send(produtos);

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }

});


endpoints.get('/produto/img')


endpoints.put('/produto/alterar/:id', async (req, resp) => {
    try {
      const { id } = req.params;
      const { produto} = req.body;
  
      const resposta = await atualizarProduto(produto,id);
  
      if (resposta === 0) {
        resp.status(404).send({ message: 'Produto não encontrado' });
      } else {
        resp.status(200).send({ message: 'Produto atualizado com sucesso' });
      }
    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  });
  
  endpoints.delete('/produto/:id', async (req, resp) => {
    try {
      const { id } = req.params;
      const resposta = await excluirProduto(id);
  
      if (resposta === 0) {
        resp.status(404).send({ message: 'Produto não encontrado' });
      } else {
        resp.status(200).send({ message: 'Produto excluído com sucesso' });
      }
    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  });



endpoints.post('/produto/:id/capa', upload.single('capa'), async (req, resp) => {
  try {
    const { id } = req.params;
    const image = req.file.path;
    const resposta = await imagem(image, id);

    if (resposta != 1) {
      console.log( 'imagem nao pode ser salva')
    }
   

    resp.status(204).send();
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

  

  endpoints.get('/produto/img', async (req, resp) => {
    try {
  
      const imagem = await listarprodutoimg();
      resp.send(imagem);
  
    } catch (err) {
      resp.status(400).send({ erro: err.message });
    }
  
  });
  export default endpoints;
  