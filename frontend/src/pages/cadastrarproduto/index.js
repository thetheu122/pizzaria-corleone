import './index.scss'

import axios from 'axios'
import React, { useState } from 'react';
import storage from 'local-storage';






const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarproduto(nome, tipo, igredientes, preco_promocional, descricao) {
    const resposta = await api.post('/produto', {
        tipo:tipo,
        igredientes:igredientes,
        nome:nome,
        descricao:descricao,
        preco_promocional:preco_promocional,
       
    })
    return resposta.data
    
}



export async function restricao(restricao){
    const resposta =await api.post('/restricao',{
        restricao:restricao
    })
}



export async function enviarimagemProduto(id, imagem) {
    const formData = new FormData()
    formData.append('capa', imagem)

    const resposta = await api.post(`/produto/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipaer/form-data"
        }
    })

    return resposta.status

}






export default function Cadastro() {
    const [nome, setnome] = useState('')
    const [tipoproduto, settipoproduto] = useState([])
    const [ingredientes, setingrediente] = useState('')
    const [restricao, setrestricao] = useState('')
    const [preco, setpreco] = useState(0)
    const [descricao, setdescricao] = useState('')

    
  const restricaoo = (novaRestricao) => {
    if (restricao === novaRestricao) {
    
      setrestricao('');
    } else {
     
      setrestricao(novaRestricao);
    }
  };




  async function salvarclick() {
    try {
        const produto = storage('root').id;
        const resposta = await cadastrarproduto(nome, tipoproduto, ingredientes, restricao, preco, descricao, produto);

        if (resposta.status === 200) {
            alert('Produto cadastrado com sucesso');
        } else {
            alert('Erro ao cadastrar o produto. Por favor, tente novamente mais tarde.');
        }
    } catch (err) {
        alert('Erro ao cadastrar o produto. Por favor, tente novamente mais tarde.');
        console.error(err);
    }
}


    return (
        <div className='connt'>
            <div className='comp' >

            </div>





            <div className='cont' >


                <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    <div className='img'>
                        <div className='ti-h1'>
                            <h1>Adicionar uma imagem +</h1>
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
                                                settipoproduto('Vinho');
                                            } else {
                                                settipoproduto('');
                                            }
                                        }}
                                    />
                                    <p className='nomeproduto'>Vinho</p>
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
                            <button onClick={salvarclick}>Finalizar Cadastro</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}
