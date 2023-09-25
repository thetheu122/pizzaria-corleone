import './index.scss'

import axios from 'axios'
import React, { useState } from 'react';
import CompAtalhosAdm from '../../components/compAtalhosAdm';



export default function Cadastro() {
    const [nome, setnome] = useState('')
    const [tipoproduto, settipoproduto] = useState('')
    const [ingredientes, setingrediente] = useState('')
    const [restricao, setrestricao] = useState([])
    const [preco, setpreco] = useState(0)
    const [descricao, setdescricao] = useState('')
    const [disponivel, setDisponivel] = useState(false);
    const [imagem, setImagem] = useState();


  
  async function cadastrarProduto() {
    const formData = new FormData();
    formData.append('capa', imagem);

    try {
     
      const cadastrar = {
        nome: nome,
        tipo: tipoproduto,
        ingredientes: ingredientes,
        preco: preco,
        descricao: descricao,
        disponivel: disponivel,
      };

   

      const respCadastro = await axios.post('http://localhost:5000/produto', cadastrar);
      const productId = respCadastro.data.id;


      const respImagem = await axios.post(`http://localhost:5000/produto/${productId}/capa`, formData);
      console.log(respImagem)


      


      const restricaoData = {
        restricao: restricao,
        idProduto: productId,
      };

    alert(JSON.stringify(restricaoData));
      
     
      const resprestricao = await axios.post('http://localhost:5000/restricao', restricaoData);
      
    



      if (respCadastro.status === 200) {
        alert('Produto cadastrado com sucesso!');

      } else {
        alert(`Erro ao cadastrar o produto: ${respCadastro.statusText}, ${resprestricao.statusText}`);
      }

      if (!nome || !tipoproduto || !ingredientes || !restricao || preco <= 0 || !descricao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      if(!restricao){
        alert('Preencher o campo restrição');
        return
      }
    } catch (err) {
      if (err.response) {
        alert(`Erro ao cadastrar o produto: ${JSON.stringify(err.response.data)}`);
      } else {
        alert(`Erro ao cadastrar o produto: ${err.message}`);
      }
    }
  }


    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        if (imagem) {
            return URL.createObjectURL(imagem);
        }
        return null;
    }

    const selecionarTipo = (e, tipo) => {
        if (e.target.checked) {
            settipoproduto(tipo);
        } else {
            settipoproduto('');
        }
    };

    return (
        <div className='connt'>

            <CompAtalhosAdm />


            <div className='cont' >


                <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    <div className='img'>
                        <div className='ti-h1' onClick={escolherImagem}>
                            {!imagem && <h1>Adicionar uma imagem +</h1>}
                            {imagem && <img className='imagem-capa' src={mostrarImagem()} alt='' />}
                            <input type="file" id='imagemCapa' accept="image/*" onChange={e => setImagem(e.target.files[0])} />
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
                                        value="Bebida"
                                        checked={tipoproduto === 'Bebida'}
                                        onChange={(e) => selecionarTipo(e, 'Bebida')}
                                    />
                                    <label className='nomeproduto'>Bebida</label>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Sobremesa"
                                        checked={tipoproduto === 'Sobremesa'}
                                        onChange={(e) => selecionarTipo(e, 'Sobremesa')}
                                    />
                                    <label className='nomeproduto'>Sobremesa</label>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Salgado"
                                        checked={tipoproduto === 'Salgado'}
                                        onChange={(e) => selecionarTipo(e, 'Salgado')}
                                    />
                                    <label className='nomeproduto'>Salgado</label>
                                </div>
                            </div>

                            
                            {/* <div className='prod'>
                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Vegano"
                                        checked={tipoproduto === 'Vegano'}
                                        onChange={(e) => selecionarTipo(e, 'Vegano')}
                                    />
                                    <label className='nomeproduto'>Vegano</label>
                                </div>

                                
                            <div className='prod'>
                                <div className='in'>
                                    <input
                                        className="tay"
                                        type="checkbox"
                                        value="Vegetariano"
                                        checked={tipoproduto === 'Vegetariano'}
                                        onChange={(e) => selecionarTipo(e, 'Vegetariano')}
                                    />
                                    <label className='nomeproduto'>Vegetariano</label>
                                </div> */}



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
                                        onChange={() => setrestricao('Glúten')}
                                    />
                                    <p className='nomeproduto'>Glúten</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="ovo"
                                        onChange={() => setrestricao('Ovo')}
                                    />
                                    <p className='nomeproduto'>Ovo</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Leite e seus derivados"
                                        onChange={() =>  setrestricao('Leite e seus derivados')}
                                    />
                                    <p className='nomeproduto'>Leite e seus derivados</p>
                                </div>
                            </div>

                            <div className='pref-prod'>
                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegetariano"
                                        onChange={() => setrestricao('Vegetariano')}
                                    />
                                    <p className='nomeproduto'>Vegetariano</p>
                                </div>

                                <div className='in'>
                                    <input
                                        className="tay2"
                                        type="checkbox"
                                        value="Vegano"
                                        onChange={() =>setrestricao('Vegano')}
                                    />
                                    <p className='nomeproduto'>Vegano</p>
                                </div>
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
                            <button onClick={cadastrarProduto}>Finalizar Cadastro</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>



    )
}

