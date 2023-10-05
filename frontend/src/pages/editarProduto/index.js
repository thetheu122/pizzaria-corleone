//import './index.scss'

import axios from 'axios'
import React, { useEffect, useState } from 'react';
import storage, { set } from 'local-storage';
import CompAtalhosAdm from '../../components/compAtalhosAdm';

import { useParams } from 'react-router-dom';






export default function EditarProduto() {
    const [nome, setnome] = useState('')
    const [tipo, settipo] = useState(0)
    const [ingredientes, setingrediente] = useState('')
    const [restricao, setrestricao] = useState([])
    const [preco, setpreco] = useState(0)
    const [descricao, setdescricao] = useState('')
    const [disponivel, setDisponivel] = useState(false);
    const [imagem, setImagem] = useState('');

    const {id} = useParams();

    const [idproduto, setIdproduto] = useState(id)
    

    useEffect(() => {
        teste()
    }, [])


    async function teste() {
     
   
          const respostaApi = await axios.get(`http://localhost:5000/produto`);
          const iddesejado = idproduto;

            const encontrarid = respostaApi.data
            const objetoDesejado = encontrarid

            
            //const encontraridrestricao = encontarid.idrestricao
            console.log(objetoDesejado)
      }
      

    async function enviarimagem(id, imagem) {
        const formData = new FormData();
        formData.append('capa', imagem);
    
        const r = await axios.put(`http://localhost:5000/imagem/editar/${id}`, formData , {
            headers: {
                "Content-type": "multipart/form-data"
            },
        })
    }



async function alterarProduto() {

    try {

        /*if (!imagem) {
                throw new Error('escolha uma imagem')
        }*/
        

        const naotemid = 157


        const alterarRestricao = {
            restricao: restricao
        }

        const respRestricao = await axios.put(`/restricao/alterar/${naotemid}`, alterarRestricao)

        

       

        const produto = {
            nome:nome,
            tipo: tipo,
            ingredientes:ingredientes,
            preco:preco,
            descricao:descricao,
            disponivel: disponivel
        }

        alert(JSON.stringify(produto));

        const resposta = await axios.put(`http://localhost:5000/produto/editar/${idproduto}`, produto)


    if (resposta.status === 200) {
        alert("Produto alterado!");
    }

        
    } catch (err) {
        if (err.response) {
            console.log('Erro de resposta:', err.response.data);
            alert(`Erro na tentativa de alterar o produto: ${JSON.stringify(err.response.data)}`);
        } else {
            console.log('Erro não tratado:', err.message);
            alert(`Erro na tentativa de alterar o produto: ${err.message}`);
        }
    }

}









    function escolherImagem() {
        document.getElementById('imagemcapa').click();
    }


    function mostrarImagem() {
        if (imagem) {
            return URL.createObjectURL(imagem);
        }
        return ''
    }

    return (
        <div className='connt'>

            <CompAtalhosAdm />


            <div className='cont' >


                <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    <div className='img' onClick={escolherImagem}>
                        <div className='ti-h1'>

                            <img src={mostrarImagem()} alt='IMAGEM DO PRODUTO' />
                 
                        <input type="file" id='imagemcapa' accept="image/*"  onChange={e => setImagem(e.target.files[0])} />

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
                                                settipo('Bebida');
                                            } else {
                                                settipo('');
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
                                                settipo('Sobremesa');
                                            } else {
                                                settipo('');
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
                                                settipo('Salgado');
                                            } else {
                                                settipo('');
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
                                            const value = e.target.value;
                                            // Verifique se a restrição já existe no array antes de adicioná-la ou removê-la
                                            if (restricao.includes(value)) {
                                                // Se já existir, remova-a
                                                setrestricao(restricao.filter(item => item !== value));
                                            } else {
                                                // Caso contrário, adicione-a
                                                setrestricao([...restricao, value]);
                                            }
                                        }}
                                        checked={restricao.includes('Glúten')} // Verifique se a restrição está marcada
                                    />
                                    <p className='nomeproduto'>Glúten</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Ovo"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Verifique se a restrição já existe no array antes de adicioná-la ou removê-la
                                            if (restricao.includes(value)) {
                                                // Se já existir, remova-a
                                                setrestricao(restricao.filter(item => item !== value));
                                            } else {
                                                // Caso contrário, adicione-a
                                                setrestricao([...restricao, value]);
                                            }
                                        }}
                                        checked={restricao.includes('Ovo')} // Verifique se a restrição está marcada
                                    />
                                    <p className='nomeproduto'>Ovo</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Leite e seus derivados"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Verifique se a restrição já existe no array antes de adicioná-la ou removê-la
                                            if (restricao.includes(value)) {
                                                // Se já existir, remova-a
                                                setrestricao(restricao.filter(item => item !== value))
                                            } else {
                                                // Caso contrário, adicione-a
                                                setrestricao([...restricao, value])
                                            }
                                        }}
                                        checked={restricao.includes('Leite e seus derivados')} // Verifique se a restrição está marcada
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
                                            const value = e.target.value;
                                            // Verifique se a restrição já existe no array antes de adicioná-la ou removê-la
                                            if (restricao.includes(value)) {
                                                // Se já existir, remova-a
                                                setrestricao(restricao.filter(item => item !== value));
                                            } else {
                                                // Caso contrário, adicione-a
                                                setrestricao([...restricao, value]);
                                            }
                                        }}
                                        checked={restricao.includes('Vegetariano')}
                                    />
                                    <p className='nomeproduto'>Vegetariano</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegano"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Verifique se a restrição já existe no array antes de adicioná-la ou removê-la
                                            if (restricao.includes(value)) {
                                                // Se já existir, remova-a
                                                setrestricao(restricao.filter(item => item !== value));
                                            } else {
                                                // Caso contrário, adicione-a
                                                setrestricao([...restricao, value]);
                                            }
                                        }}
                                        checked={restricao.includes('Vegano')}
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
                        <div className='disponivel'>
                            <h1>Disponível:</h1>
                            <input
                         type='checkbox'
                               checked={disponivel}
                              onChange={() => setDisponivel(!disponivel)} 
                                 />
                           </div>

                        <div className='fin-botao'>
                            <button onClick={alterarProduto}>Finalizar Cadastro</button>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>



    )

}

