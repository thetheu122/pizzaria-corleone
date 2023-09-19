import { useState } from 'react';
import './index.scss';
import '../../assets/config/fonts-config.scss'
import SetaEsquerda from '../../assets/img/seta-preta 1.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CadastroPart2(props) {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [estado, setEstado] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [rua, setRua] = useState('');
  const [num, setNum] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');

const addCliente = async () => {  
  try {
    let requestEn = {
      estado: estado,
      municipio: municipio,
      rua: rua,
      numero: num,
      cep: cep,
    };
    
    let responseEn = await axios.post('http://localhost:5000/endereco/cadastro', requestEn);
    
    if (responseEn.status !== 200) {
      toast.error((`Erro ao cadastrar endereço: ${responseEn.statusText}`), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

    let nascimento = `${dia}/${mes}/${ano}`;

    let requestCl = {
      endereco: responseEn.data[0].insertId,
      cartao: 1,
      cliente: props.nome,
      email: props.email,
      telefone: props.telefone,
      senha: props.senha,
      cpf: cpf,
      nascimento: nascimento
    }

    let responseCl = await axios.post('http://localhost:5000/cliente/cadastro', requestCl);

    if (responseCl.status !== 200) {
      toast.error((`Erro ao cadastrar cliente: ${responseCl.statusText}`), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

  } catch (error) {
    toast.error((`Erro no processo de cadastro: ${error}`), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
}
    


  return (
    <div className="pag-cadastro-part2">
      <div className='container'>
        <div className='kitar' onClick={props.inversao}>
          <img src={SetaEsquerda} />
          <p>Voltar</p>
        </div>

        <div className='conteudo'>
          <h1>Está quase tudo pronto...</h1>
          <p>Logradouro</p>

          <div className='informacoes'>
            <div className='esquerda'>
              <div><input type='text' value={estado} onChange={(e) => setEstado(e.target.value)} placeholder='Estado' /></div>
              <div><input type='text' value={municipio} onChange={(e) => setMunicipio(e.target.value)} placeholder='Município' /></div>
              <div><input type='text' value={rua} onChange={(e) => setRua(e.target.value)} placeholder='Rua' /></div>
              <div><input type='text' value={num} onChange={(e) => setNum(e.target.value)} placeholder='Número' /></div>
              <div><input type='text' value={cep} onChange={(e) => setCep(e.target.value)} placeholder='CEP' /></div>
              <div><input type='text' value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='CPF' /></div>
              <p>Data de Nascimento</p>
              <div className='data-nascimento'>
                <input id='diminuicao' className='separacao' type='text' placeholder='Dia' />
                <input id='diminuicao' className='separacao' type='text' placeholder='Mês' />
                <input id='diminuicao' type='text' placeholder='Ano' />
              </div>
            </div>

            <div className='direita'>
              <div><input type='text' placeholder='CPF' /></div>
              <div><input type='text' placeholder='Como você nos conheceu?' /></div>
              <h1>DOM CORLEONE</h1>
              <h2>Tradição Italiana</h2>
              <button onClick={addCliente}>Finalizar Cadastro</button>
              <p>Ao criar uma conta, você concorda com nossos<br /> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}