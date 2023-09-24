import './index.scss'

import axios from 'axios'
import React, { useState } from 'react';
import storage, { set } from 'local-storage';
import CompAtalhosAdm from '../../components/compAtalhosAdm';




export default function Cadastro() {
    const [nome, setnome] = useState('')
    const [tipoproduto, settipoproduto] = useState(0)
    const [ingredientes, setingrediente] = useState('')
    const [restricao, setrestricao] = useState('')
    const [preco, setpreco] = useState(0)
    const [descricao, setdescricao] = useState('')
    const [disponivel, setdisponivel] = useState(true);
    const [imagem, setImagem] = useState(null);

    
    const [erroCadastro, setErroCadastro] = useState('');
    const [erroRestricao, setErroRestricao] = useState('');
    const [respProduto, setRespProduto] = useState(null);
   // const [id, setId] = useState(0)
    

    async function cadastrarProduto(){

        try{
        let cadastrar={
            tipo: tipoproduto, 
            ingredientes: ingredientes,
            nome: nome,
            preco: preco,
            descricao: descricao,
            disponivel: disponivel,
           
        }

       

        let respCadastro= await axios.post('http://localhost:5000/produto', cadastrar)
        console.log(cadastrar)


        let restricaoo={
            restricao:restricao
        }

       // setId(respCadastro.id);

        let resprestricao= await axios.post('http://localhost:5000/restricao', restricaoo)
        console.log(resprestricao)

        
       
        alert(imagem)
  
        let respImagem = await axios.post(`http://localhost:5000/produto/${respProduto.data.id}/capa`,imagem );
        console.log(respImagem);


        

        if (respCadastro.status === 200) {
            alert("Produto cadastrado com sucesso!");

            
        } else {
            alert(`Erro ao cadastrar o produto: ${respCadastro.statusText}, ${resprestricao.statusText}`);
        }
        if (!nome || !tipoproduto || !ingredientes || !restricao || preco <= 0 || !descricao ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

    }catch(err){
        if (err.response) {
            alert(`Erro ao cadastrar o produto: ${JSON.stringify(err.response.data)}`)
        } else {
            alert(`Erro ao cadastrar o produto: ${err.message}`)
        }
       
    }
    }
      
    function handleImagemChange(e) {
        const arquivo = e.target.files[0]
        setImagem(arquivo)
    }



   

  


    return (
        <div className='connt'>

            <CompAtalhosAdm />


            <div className='cont' >


                <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    <div className='img'>
                        <div className='ti-h1'>
                 
                        <input type="file" accept="image/*" onChange={handleImagemChange} />

                        </div>
                    </div>

                    <div className='dadosdoproduto'>
                        <div className='nome'>
                            <p>Nome:</p>
                            <input type='text' placeholder='Escreva..' value={nome} onChange={e => setnome(e.target.value)} />
                        </div>



                        <p className='linha'> </p>

                        <div className='b-produto'>
                            <h1>Seu Produto é...</h1>




                            <div className='prod'>

                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Vinho"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                settipoproduto('Bebida');
                                            } else {
                                                settipoproduto('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Bebida</p>
                                </div>



                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Sobremesa"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                settipoproduto('Sobremesa');
                                            } else {
                                                settipoproduto('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Sobremesa</p>
                                </div>




                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Salgado"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                settipoproduto('Salgado');
                                            } else {
                                                settipoproduto('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Salgado</p>
                                </div>
                            </div>



                            <p className="linha"></p>

                        </div>

                        <div className='ingredientes'>
                            <h1>Ingredientes:</h1>
                            <input type='text' placeholder='Escreva..' value={ingredientes} onChange={e => setingrediente(e.target.value)} />
                        </div>

                        <p className='linha'></p>

                        <div className='preferencia'>
                            <h1>Pessoas com preferencias alimentares/alergias podem comer</h1>
                            <div className='pref-prod'>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Glúten"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setrestricao('Glúten');
                                            } else {
                                                setrestricao('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Glúten</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Ovo"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setrestricao('Ovo');
                                            } else {
                                                setrestricao('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Ovo</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Leite e seus derivados"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setrestricao('Leite e seus derivados');
                                            } else {
                                                setrestricao('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Leite e seus derivados</p>
                                </div>

                            </div>


                        </div>

                 <div className='pref-prod'>
                 <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegetariano"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setrestricao('Vegetariano');
                                            } else {
                                                setrestricao('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Vegetariano</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegano"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setrestricao('Vegano');
                                            } else {
                                                setrestricao('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Vegano</p>
                                </div>

                            </div>


                        <p className='linha'></p>

                        <div className='valor'>
                            <h1>Qual o preço do seu produto?</h1>
                            <input type='text' placeholder='Escreva..' value={preco} onChange={e => setpreco(e.target.value)} />
                        </div>

                        <p className='linha'></p>

                        <div className='descricao'>
                            <h1>Adicione uma descrição do seu produto</h1>
                            <input type='text' placeholder='Escreva..' value={descricao} onChange={e => setdescricao(e.target.value)} />
                        </div>

                        <div className='fin-botao'>
                            <button onClick={cadastrarProduto}>Finalizar Cadastro</button>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>



    )
}

