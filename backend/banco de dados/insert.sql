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


-- Exemplo 1
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('São Paulo', 'São Paulo', 'Moema', 'Alameda dos Anapurus', '789', '04087-031');

-- Exemplo 2
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Rio de Janeiro', 'Rio de Janeiro', 'Ipanema', 'Rua Visconde de Pirajá', '456', '22410-003');

-- Exemplo 3
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Minas Gerais', 'Belo Horizonte', 'Savassi', 'Rua Pernambuco', '101', '30130-150');

-- Exemplo 4
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Bahia', 'Salvador', 'Barra', 'Avenida Oceânica', '2001', '40170-010');

-- Exemplo 5
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Pernambuco', 'Recife', 'Boa Viagem', 'Avenida Boa Viagem', '1234', '51030-300');

-- Exemplo 6
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Paraná', 'Curitiba', 'Batel', 'Rua Buenos Aires', '567', '80240-040');

-- Exemplo 7
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Ceará', 'Fortaleza', 'Meireles', 'Avenida Beira Mar', '987', '60165-120');

-- Exemplo 8
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Santa Catarina', 'Florianópolis', 'Centro', 'Rua Felipe Schmidt', '321', '88010-003');

-- Exemplo 9
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Amazonas', 'Manaus', 'Adrianópolis', 'Avenida Mário Ypiranga', '654', '69057-002');

-- Exemplo 10
INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
VALUES ('Goiás', 'Goiânia', 'Setor Marista', 'Rua 1133', '789', '74180-150');


--  tabela tb_cliente
INSERT INTO tb_cliente (id_endereco, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
VALUES 
(1, 'John Doe', 'john.doe@example.com', '123456789', 'senha123', '111.222.333-00', '1990-01-01'),
(2, 'Jane Smith', 'jane.smith@example.com', '987654321', 'senha456', '444.555.666-00', '1985-05-15'),
(3, 'Alice Johnson', 'alice.johnson@example.com', '555444333', 'senha789', '999.888.777-00', '1992-08-20'),
(4, 'Bob Anderson', 'bob.anderson@example.com', '111222333', 'senhaABC', '777.666.555-00', '1988-03-10'),
(5, 'Eva Martin', 'eva.martin@example.com', '999888777', 'senhaXYZ', '333.444.555-00', '1995-12-05'),
(6, 'Michael White', 'michael.white@example.com', '123123123', 'senha456ABC', '888.999.000-00', '1983-07-22'),
(7, 'Sophia Turner', 'sophia.turner@example.com', '444555666', 'senhaXYZ123', '222.333.444-00', '1998-02-18'),
(8, 'David Harris', 'david.harris@example.com', '777888999', 'senha123ABC', '666.777.888-00', '1980-09-14'),
(9, 'Olivia Taylor', 'olivia.taylor@example.com', '111000222', 'senhaXYZ456', '555.444.333-00', '1994-06-28'),
(10, 'William Lewis', 'william.lewis@example.com', '555666777', 'senha789ABC', '444.333.222-00', '1987-11-02');



-- TABELA CARTAO


-- tabela tb_cartao
INSERT INTO tb_cartao (id_cliente, ds_numero, ds_nome, ds_validade, ds_cvv)
VALUES 
(1, '1111222233334444', 'John Doe', '12/25', '123'),
(2, '5555666677778888', 'Jane Smith', '06/23', '456'),
(3, '9999000011112222', 'Alice Johnson', '09/24', '789'),
(4, '1234123412341234', 'Bob Anderson', '03/22', '321'),
(5, '9876987698769876', 'Eva Martin', '11/21', '654'),
(6, '4567456745674567', 'Michael White', '08/23', '987'),
(7, '2345234523452345', 'Sophia Turner', '05/25', '210'),
(8, '8765876587658765', 'David Harris', '02/26', '543'),
(9, '3456345634563456', 'Olivia Taylor', '06/24', '876'),
(10, '7890789078907890', 'William Lewis', '09/22', '109');



-- UM CLICK ACABA AQUI


-- tabela pedido produto

--  tabela tb_pedido_produto
INSERT INTO tb_pedido_produto (id_cliente, ds_produtos, ds_subtotal, ds_total, ds_desconto, ds_frete)
VALUES 
(1, '["Produto1", "Produto2"]', '50.00', '60.00', '5.00', '5.00'),
(2, '["Produto3", "Produto4"]', '70.00', '100.00', '3.00', '7.00'),
(3, '["Produto5", "Produto6"]', '75.00', '80.00', '8.00', '2.00'),
(4, '["Produto7", "Produto8"]', '90.00', '110.00', '10.00', '8.00'),
(5, '["Produto9", "Produto10"]', '120.00', '140.00', '15.00', '10.00'),
(6, '["Produto11", "Produto12"]', '80.00', '100.00', '7.00', '6.00'),
(7, '["Produto13", "Produto14"]', '60.00', '70.00', '6.00', '4.00'),
(8, '["Produto15", "Produto16"]', '110.00', '130.00', '12.00', '9.00'),
(9, '["Produto17", "Produto18"]', '95.00', '115.00', '9.00', '7.00'),
(10, '["Produto19", "Produto20"]', '85.00', '95.00', '8.00', '5.00');





-- TABELA PEDIDO
-- tabela tb_pedido
INSERT INTO tb_pedido (id_cliente, id_cartao, id_pedido_produto, dt_pedido, ds_situacao)
VALUES 
(1, 1, 1, '2023-11-15', 'Entregue'),
(2, 2, 2, '2023-11-16', 'Em preparo'),
(3, 3, 3, '2023-11-17', 'Entregue'),
(4, 4, 4, '2023-11-18', 'Em preparo'),
(5, 5, 5, '2023-11-19', 'Entregue'),
(6, 6, 6, '2023-11-20', 'Em preparo'),
(7, 7, 7, '2023-11-21', 'Entregue'),
(8, 8, 8, '2023-11-22', 'Em preparo'),
(9, 9, 9, '2023-11-23', 'Entregue'),
(10, 10, 10, '2023-11-24', 'Em preparo');
