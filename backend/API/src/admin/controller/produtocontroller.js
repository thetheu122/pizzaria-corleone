import { Router } from 'express';
import {
  inserirProduto,
  listarProdutos,
  atualizarProduto,
  excluirProduto,
  listarprodutoimg,
  imagem,
  verificarproduto
} from '../repository/produtorepository.js';

import multer from 'multer';
const upload = multer({ dest: 'storage/produto' });

const endpoints = Router();



endpoints.post('/produto', async (req, resp) => {
  try {
    const produto = req.body;
    const errors = [];

    if( produto.tipo === 'Bebida'|| produto.tipo ==="bebida"){
        produto.tipo = 1
    }

    if(produto.tipo ==="Sobremesa" || produto.tipo ==="sobremesa" ){
       produto.tipo = 2
    }

    if(produto.tipo ==='Salgado'|| produto.tipo ==="salgado"){
       produto.tipo = 3
    }
  
    if (!produto.tipo) {
      errors.push('Campo tipo vazio. É necessário preencher todos os campos.');
    }
  
    if (!produto.ingredientes) {
      errors.push('Campo ingredientes vazio. É necessário preencher todos os campos.');
    }
  
    if (!produto.nome) {
      errors.push('Campo nome vazio. É necessário preencher todos os campos.');
    }
  
    if (!produto.preco) {
      errors.push('Campo preço vazio. É necessário preencher todos os campos.');
    }
  
    if (!produto.descricao) {
      errors.push('Campo descricao vazio. É necessário preencher todos os campos.');
    }
  
    if (!produto.disponivel) {
      errors.push('Campo disponivel vazio. É necessário preencher todos os campos.');
    }

  
    if (errors.length > 0) {
      resp.status(400).send({ errors });

    } 
      else {
      const verificar = await verificarproduto(produto);
  
      if (verificar === true) {
        resp.status(400).send({ erro: 'Produto já cadastrado' });
      } else {
        const resposta = await inserirProduto(produto);
        resp.send(resposta);
      }
    }


  } catch (err) {
    resp.status(500).send({ erro: err.message });
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
  