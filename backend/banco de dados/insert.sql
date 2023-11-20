        --    \\inserts obrigatorios para o funcionamento// ---


-- // tabela avaliacao //
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('1');
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('2');
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('3');
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('4');
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('5');
INSERT INTO tb_avaliacao (ds_avaliacao)
				  values ('6');     



-- GGFG  // tabela tipo do produto //


INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'bebida');
                     
INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'sobremesa');          
                     
INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'salgado');
                     

INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'vegano');       
                     
INSERT INTO tb_tipo_produto ( ds_tipo_produto ) 
					 VALUES ( 'vegetariano');



-- // tabela produto ///

INSERT INTO tb_produto (ds_tipo_produto	, nm_produto , ds_ingredientes  , vl_preco , ds_descricao , vl_preco_promocional , bt_disponivel) 
                VALUES ( 3 , 'Margherita', 'Farinha, água, sal, fermento ,molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem' , '71,00' , ' Saboreie a autêntica Pizza Margherita, feita com ingredientes frescos e de qualidade superior. A combinação perfeita de molho de tomate suculento, queijo mozzarella e manjericão fresco cria uma experiência única. ' ,'30' , true);
                

-- Inserir Pizza Pepperoni
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
  'Pepperoni',
  'Pepperoni, queijo mozzarella, molho de tomate',
  3,
  71.00,
  'Deliciosa pizza de Pepperoni, com ingredientes de alta qualidade.',
  30.00,
  true
);

-- Inserir Pizza Prosciutto e Funghi
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
  'Prosciutto e Funghi',
  'Presunto Parma, cogumelos, queijo mozzarella, molho de tomate',
  3,
  75.00,
  'Uma combinação incrível de presunto Parma, cogumelos e queijo mozzarella.',
  32.00,
  true
);

-- Inserir Pizza Capricciosa
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
   
  'Capricciosa',
  'Presunto cozido, alcachofras, azeitonas, cogumelos, queijo mozzarella, molho de tomate',
  3,
  80.00,
  'Uma pizza recheada com sabores variados, incluindo presunto, alcachofras e cogumelos.',
  35.00,
  true
);

-- Inserir Pizza Marinara
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
  'Marinara',
  'Molho de tomate, alho, orégano, azeite de oliva extra virgem',
  3,
  65.00,
  'Pizza clássica italiana com molho de tomate, alho e orégano.',
  28.00,
  true
);

-- Inserir Pizza Carbonara
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
  'Carbonara',
  'Ovos, queijo Pecorino Romano, bacon, queijo mozzarella, molho de tomate',
  3,
  78.00,
  'Uma pizza rica em sabores, com bacon e queijo Pecorino Romano.',
  33.00,
  true
);

-- Inserir Pizza Calzone
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (
  'Calzone',
  'Presunto, queijo mozzarella, ricota, molho de tomate',
  3,
  70.00,
  'Um delicioso calzone recheado com presunto, queijo mozzarella e ricota.',
  30.00,
  true
);

-- Inserir Pizza Margherita com Burrata
INSERT INTO tb_produto (nm_produto, ds_ingredientes, ds_tipo_produto, vl_preco, ds_descricao, vl_preco_promocional, bt_disponivel)
VALUES (

  'Margherita com Burrata',
  'Farinha, água, sal, fermento, molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem, burrata',
  3,
  85.00,
  'Uma versão indulgente da clássica Margherita, com adição de burrata cremosa.',
  38.00,
  true
);
-- Inserir cupom 1
INSERT INTO tb_cupom (nm_cupom, ds_valor) VALUES ('CUPOM10', 10);

-- Inserir cupom 2
INSERT INTO tb_cupom (nm_cupom, ds_valor) VALUES ('DESCONTO20', 20);

-- Inserir cupom 3
INSERT INTO tb_cupom (nm_cupom, ds_valor) VALUES ('OFERTA50', 50);

INSERT INTO tb_cupom (nm_cupom, ds_valor) VALUES ('CORLEONE15', 15/100);

insert into  tb_restricao (id_produto,ds_restricao)
                     values (1,'lactose'); 
                     
insert into  tb_restricao (id_produto,ds_restricao)
                     values (2,'vegano'); 
                     
insert into  tb_restricao (id_produto,ds_restricao)
                     values (3,'vegetariano'); 
                     
insert into  tb_restricao (id_produto,ds_restricao)
                     values (4,'vegano'); 

insert into  tb_restricao (id_produto,ds_restricao)
                     values (5, 'gluten'); 

insert into  tb_restricao (id_produto,ds_restricao)
                     values (6,'ovo'); 

 insert into  tb_restricao (id_produto,ds_restricao)
                     values (7,'gluten');                     


INSERT INTO tb_associado (nm_nome, ds_email, ds_senha, ds_cnpj)
VALUES ('corleone', 'corleonemkmw@.com', 'mkmw123', '123456');


-- INSERTS TABELA SUGESTAO


INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (1, 1);

INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (2, 2);


INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (3, 3);


INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (4, 4);

INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (5, 5);

INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (6, 6);

INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (7, 7);

INSERT INTO tb_sugestao (id_produto, ds_sugestao) VALUES (8, 8);



-- tabela ENDEREÇO

INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('São Paulo', 'São Paulo', 'Jardim Paulista', 'Avenida Paulista', '123', '01234-567');

-- Exemplo 2
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Rio de Janeiro', 'Rio de Janeiro', 'Copacabana', 'Rua Nossa Senhora de Copacabana', '456', '22020-001');

-- Exemplo 3
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Minas Gerais', 'Belo Horizonte', 'Funcionários', 'Avenida Getúlio Vargas', '789', '30112-345');




-- TABELA CLIENTE


INSERT INTO tb_cliente (id_endereco, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
VALUES (1, 'João Silva', 'joao.silva@email.com', '123456789', 'senha123', '123.456.789-00', '1990-01-01');

-- Exemplo 2
INSERT INTO tb_cliente (id_endereco, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
VALUES (2, 'Maria Oliveira', 'maria.oliveira@email.com', '987654321', 'senha456', '987.654.321-00', '1985-05-15');

-- Exemplo 3
INSERT INTO tb_cliente (id_endereco, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
VALUES (3, 'Pedro Santos', 'pedro.santos@email.com', '555666777', 'senha789', '555.666.777-00', '1988-11-30');



-- TABELA CARTAO


INSERT INTO tb_cartao (id_cliente, ds_numero, ds_nome, ds_validade, ds_cvv)
VALUES (1, '1111222233334444', 'João Silva', '12/25', '123');

-- Exemplo 2
INSERT INTO tb_cartao (id_cliente, ds_numero, ds_nome, ds_validade, ds_cvv)
VALUES (2, '5555666677778888', 'Maria Oliveira', '06/23', '456');

-- Exemplo 3
INSERT INTO tb_cartao (id_cliente, ds_numero, ds_nome, ds_validade, ds_cvv)
VALUES (3, '9999000011112222', 'Pedro Santos', '09/24', '789');


-- UM CLICK ACABA AQUI


--- tabela pedido produto

-- Exemplo 1
INSERT INTO tb_pedido_produto (id_cliente, ds_produtos, ds_subtotal, ds_total, ds_desconto, ds_frete)
VALUES (1, '["Produto X", "Produto Y"]', '50.00', '60.00', '5.00', '5.00');

-- Exemplo 2
INSERT INTO tb_pedido_produto (id_cliente, ds_produtos, ds_subtotal, ds_total, ds_desconto, ds_frete)
VALUES (2, '["Produto Z", "Produto W"]', '70.00', '80.00', '3.00', '7.00');

-- Exemplo 3
INSERT INTO tb_pedido_produto (id_cliente, ds_produtos, ds_subtotal, ds_total, ds_desconto, ds_frete)
VALUES (3, '["Produto Q", "Produto R"]', '90.00', '100.00', '8.00', '2.00');




-- TABELA PEDIDO

INSERT INTO tb_pedido (id_cliente, id_cartao, id_pedido_produto, dt_pedido, ds_situacao)
VALUES (1, 1, 1, '2023-11-15', 'Entregue');

-- Exemplo 2
INSERT INTO tb_pedido (id_cliente, id_cartao, id_pedido_produto, dt_pedido, ds_situacao)
VALUES (2, 2, 2, '2023-11-16', 'Em preparo');

-- Exemplo 3
INSERT INTO tb_pedido (id_cliente, id_cartao, id_pedido_produto, dt_pedido, ds_situacao)
VALUES (3, 3, 3, '2023-11-17', 'Entregue');