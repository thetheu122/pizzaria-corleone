-- GGFG  // tabela endereco ///


INSERT INTO tb_endereco (ds_estado, ds_municipio, ds_rua, ds_numero, ds_cep)
VALUES ('São Paulo', 'São Paulo', 'Rua da Amostra, 123', '123', '12345-678');
 
 
SELECT *
FROM tb_endereco;

DELETE FROM tb_endereco 
WHERE id_endereco = 1;



-- GGFG // tabela cartao ///


INSERT INTO tb_cartao (ds_numero, ds_nome, ds_validade, ds_cvv)
			   VALUES ('1234567890123456', 'João Silva', '12/25', '123');

SELECT *
FROM tb_cartao;

DELETE 
FROM tb_cartao 
WHERE id_cartao = 1;



-- GGFG // TABELA CLIENTE //

INSERT INTO tb_cliente (id_endereco, id_cartao, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
VALUES (1, 1, 'João Silva', 'joaosilva@gmail.com', '123456789', 'minhasenha', '123.456.789-00', '01/01/1980');

SELECT
    tb_cliente.id_cliente    AS ID,
    tb_cliente.nm_cliente    AS Nome_cliente,
    tb_cliente.ds_email      AS Email,
    tb_endereco.ds_estado    AS Estado,
    tb_endereco.ds_municipio AS Municipio,
    tb_endereco.ds_rua       AS Rua,
    tb_endereco.ds_numero    AS Numero,
    tb_endereco.ds_cep       AS Cep,
    tb_cartao.ds_numero      AS Numero_cartao,
    tb_cartao.ds_nome        AS Nome_cartao,
    tb_cartao.ds_validade    AS Validade,
    tb_cartao.ds_cvv AS ds_cvv_cartao
FROM
    tb_cliente
INNER JOIN
    tb_endereco ON tb_cliente.id_endereco = tb_endereco.id_endereco
LEFT JOIN
    tb_cartao ON tb_cliente.id_cartao = tb_cartao.id_cartao;



DELETE
FROM tb_cliente
WHERE id_cliente = 1;




-- GGFG  // TABELA RESTRICAO //

INSERT INTO tb_restricao (ds_restricao )
				  VALUES (  'ovo') ;

SELECT
    tb_restricao.id_restricao  as id,
    tb_restricao.ds_restricao  as Restrição ,
    tb_produto.nm_produto      as Produto
FROM
    tb_restricao
INNER JOIN
    tb_produto ON tb_restricao.id_produto = tb_produto.id_produto;



UPDATE  tb_restricao
SET     ds_restricao = 'OVO'
where   id_restricao = 1;

DELETE FROM    tb_restricao
WHERE          id_restricao = 1;



-- GGFG  // tabela tipo do produto //


INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'Bebida');
                     
INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'Sobremesa');          
                     
INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'Salgado');
                     
SELECT  id_tipo_produto  as ID,
		ds_tipo_produto  as Classificação
FROM    tb_tipo_produto; 

SELECT  id_tipo_produto  as ID,
		ds_tipo_produto  as Classificação
FROM    tb_tipo_produto
WHERE ds_tipo_produto like'%bebida%'; 



UPDATE  tb_tipo_produto
SET     ds_tipo_produto = 'BEBIDAS'
WHERE   id_tipo_produto = 1;
      

DELETE FROM  tb_tipo_produto
WHERE        id_tipo_produto =1;


-- GGFG  // tabela comenatrio //



INSERT INTO tb_comentario ( ds_comentario , id_produto)
				   VALUES ( 'MUITO BOM ', 1);
                   
SELECT id_comentario  as ID,
	   ds_comentario  as Comentario,
       id_produto     as produto
FROM   tb_comentario;


UPDATE tb_comentario
SET    ds_comentario  = 'gostei',
	   id_produto    = 1
WHERE  id_comentario  = 1 ;

DELETE FROM tb_comentario 
WHERE       id_comentario =1;




-- GGFG  // tabela produto  //

INSERT INTO tb_produto ( ds_tipo_produto , ds_ingredientes , nm_produto , vl_preco , ds_descricao , vl_preco_promocional , bt_disponivel) 
                VALUES ( 1 , 'arroz', 'Pizza de chocolate' , '71,00' , ' pizza de chocolate com chocolate ' ,'30' , true);
                
                
SELECT
	tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as Nome,  
    tb_tipo_produto.ds_tipo_produto   as Tipo ,
	tb_produto.vl_preco               as Preço,
	tb_produto.vl_preco_promocional   as Preço_promocional,
    tb_produto.ds_ingredientes        as ingredientes,
    tb_produto.ds_descricao           as Descrição ,
    tb_produto.bt_disponivel          as disponivel
FROM
    tb_produto
INNER JOIN
      tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto;
    
    
    
UPDATE tb_produto
INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
SET
    tb_produto.nm_produto = 'Novo Nome',
    tb_tipo_produto.ds_tipo_produto = 'Nova Classificação',
    tb_produto.vl_preco = 'Novo Preço',
    tb_produto.vl_preco_promocional = 'Novo Preço Promocional',
    tb_produto.ds_ingredientes = 'Novo Comentário',
    tb_produto.ds_descricao = 'Nova Descrição',
    tb_produto.bt_disponivel = 1
WHERE tb_produto.id_produto = 1;


DELETE FROM tb_produto
WHERE   id_produto = 1;
