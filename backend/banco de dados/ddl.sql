CREATE DATABASE  db_corleone ;

USE db_corleone;
drop database db_corleone;


 

CREATE TABLE tb_tipo_produto (

id_tipo_produto         INT PRIMARY KEY AUTO_INCREMENT,
ds_tipo_produto         VARCHAR(100)
);


	



CREATE TABLE tb_produto (
	
id_produto	   	      INT PRIMARY KEY AUTO_INCREMENT,
ds_tipo_produto		  INT NOT NULL,
ds_ingredientes       VARCHAR(500)  NOT NULL,     
nm_produto            VARCHAR(200)  NOT NULL,
vl_preco              VARCHAR(200)  NOT NULL,
ds_descricao          VARCHAR(200)  NOT NULL,
vl_preco_promocional  VARCHAR(200) ,
bt_disponivel         bool  NOT NULL,


FOREIGN KEY   (ds_tipo_produto) REFERENCES  tb_tipo_produto (id_tipo_produto)

);


CREATE  TABLE tb_comentario (

id_comentario   INT PRIMARY KEY AUTO_INCREMENT,
ds_comentario   VARCHAR(200) ,
id_produto      INT, 

FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)

);

CREATE TABLE tb_restricao (

id_restricao       INT PRIMARY KEY AUTO_INCREMENT,
id_produto         INT ,
ds_restricao       VARCHAR(200) ,

FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);



CREATE TABLE tb_imagem (

id_imagem        INT PRIMARY KEY AUTO_INCREMENT,
id_produto       INT , 
img_produto 	 VARCHAR(500),

FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)

);

       
       
SELECT      tb_produto.id_produto  as Produto,
            tb_produto.nm_produto as Produto,
            tb_produto.ds_tipo_produto as Classificação,
            tb_produto.vl_preco as Preço,
            tb_produto.vl_preco_promocional as Preço_promocional,
            tb_produto.ds_ingredientes as Ingredientes,
            tb_produto.ds_descricao as Descrição,
            tb_produto.bt_disponivel as Disponivel,
			tb_imagem.id_imagem  as id_imagem,  
            tb_imagem.img_produto as imagem 
          
FROM       tb_imagem 
INNER JOIN tb_produto ON tb_imagem.id_produto = tb_produto.id_produto;


insert into tb_imagem (id_produto , img_produto)
			   VALUES ( 2 , 'MAMMSPXPAMPMXMXXMXPMXPMX');


           





CREATE TABLE  tb_cartao(

id_cartao    INT PRIMARY KEY AUTO_INCREMENT,
ds_numero    VARCHAR(100) NOT NULL,
ds_nome      VARCHAR(100) NOT NULL,
ds_validade  VARCHAR(100) NOT NULL,
ds_cvv       VARCHAR(100)  NOT NULL

);


INSERT INTO tb_cartao ( ds_numero , ds_nome ,ds_validade ,ds_cvv)
			   VALUES ( ' 0000-0000 ', 'maximosmiguel' , '28/12' , '123' );



CREATE TABLE tb_tp_pagamento (

id_tp_pagamento   INT PRIMARY KEY AUTO_INCREMENT,
id_cartao         INT,
tp_pix            VARCHAR(200),
tp_dinheiro       BOOL ,
FOREIGN KEY ( id_cartao ) REFERENCES tb_cartao(id_cartao)

);



CREATE TABLE tb_endereco (

id_endereco     INT PRIMARY KEY AUTO_INCREMENT,
ds_estado       VARCHAR(200)  ,
ds_municipio    VARCHAR(200)  ,
ds_rua          VARCHAR(200) NOT NULL ,
ds_numero       VARCHAR(200) NOT NULL ,
ds_cep          VARCHAR(200) NOT NULL

);

			
CREATE TABLE  tb_cliente (

id_cliente     INT PRIMARY KEY AUTO_INCREMENT,
id_endereco    INT  NOT NULL ,
id_cartao      INT   ,
nm_cliente     VARCHAR(200) NOT NULL,
ds_email       VARCHAR(200) NOT NULL,
ds_telefone    VARCHAR(200) NOT NULL,
ds_senha       VARCHAR(200) NOT NULL,
ds_cpf         VARCHAR(200) NOT NULL,
ds_nacimento   VARCHAR(200) NOT NULL,

FOREIGN  KEY (id_endereco)	REFERENCES tb_endereco(id_endereco) ,
FOREIGN  KEY (id_cartao)	REFERENCES tb_cartao(id_cartao) 

);




CREATE TABLE tb_pedido (

id_pedido           INT PRIMARY KEY AUTO_INCREMENT,
id_cliente          INT NOT NULL ,
id_tipo_pagamento   INT NOT NULL,
ds_nota_pag         VARCHAR(200) NOT NULL ,
dt_pedido           DATE         NOT NULL , 
ds_situacao         VARCHAR(200) NOT NULL ,

FOREIGN  KEY ( id_cliente )         REFERENCES tb_cliente ( id_cliente )  ,
FOREIGN  KEY ( id_tipo_pagamento) 	REFERENCES tb_tp_pagamento ( id_cartao ) 


);




CREATE TABLE tb_pedido_produto (

id_pedido_produto   INT PRIMARY KEY AUTO_INCREMENT,
id_produto          INT NOT NULL , 
id_pedido           INT NOT NULL ,
qtd_produto         VARCHAR(100),

FOREIGN  KEY ( id_produto) 	REFERENCES tb_produto ( id_produto ) ,
FOREIGN  KEY ( id_pedido) 	REFERENCES tb_pedido ( id_pedido ) 

);



CREATE TABLE tb_associado (

id_associado   INT PRIMARY KEY AUTO_INCREMENT ,
nm_nome        VARCHAR(100)  NOT NULL,
ds_email       VARCHAR (100) NOT NULL ,
ds_senha       VARCHAR (100) NOT NULL ,
ds_cnpj        VARCHAR (100) NOT NULL
);