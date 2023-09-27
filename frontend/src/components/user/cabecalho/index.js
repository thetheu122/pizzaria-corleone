import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Components from './Components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import './index.scss'
import '../../../assets/config/fonts-config.scss'
import Modal from 'react-modal'
import Mais from '../../../assets/images/icons/more_icon.svg'
import Sino from '../../../assets/images/icons/order_on_icon.svg'
import Adm from '../../../assets/images/icons/adm_icon.svg'
import Cardapio from '../../../assets/images/icons/cardapio_icon.svg'
import CarrinhoIcon from '../../../assets/images/icons/shopping-cart_icon.svg';
import Conta from '../../../assets/images/icons/conta.svg'
import Carrinho from '../carrinho'
import SetaEsquerda from '../../../assets/img/seta-preta 1.png';


export default function Cabecalho() {
  const [isLogged, setIsLogged] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openCadastroModal, setOpenCadastroModal] = useState(true)

  const [signIn, toggle] = useState(true);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [estado, setEstado] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [rua, setRua] = useState('');
  const [num, setNum] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');

  const [cadastro, setCadastro] = useState(true);

  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

  const inversao = () => {
    if (!nome) {
      toast.warn('Digite o seu nome', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if (!email) {
      toast.warn('Digite o seu email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if (!telefone) {
      toast.warn('Digite o seu telefone', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if (!senha) {
      toast.warn('Digite a sua senha', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setOpenCadastroModal(!openCadastroModal)
    }
  }


  const login = async () => {
    if(!email){
      toast.warn('Campo do email vazio', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(!senha){
      toast.warn('Campo da senha vazio', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    else{
      let response = await axios.get(`http://localhost:5000/cliente/login?email=${email}&senha=${senha}`)
      if (response.data.length == 1) {
        toast.info("Login realizado com sucesso")
      }
      else {
        toast.error("Falha ao realizar o Login")
      }
  }

  }

  const addCliente = async () => {
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
      cliente: nome,
      email: email,
      telefone: telefone,
      senha: senha,
      cpf: cpf,
      nascimento: nascimento
    }

    let responseCl = await axios.post('http://localhost:5000/cliente/cadastro', requestCl);

    console.log(responseCl)

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
    else {
      toast.info((`Cadastro realizado com sucesso`), {
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
    <>
      <main className='cabecalho'>
        <div className='esquerda-cabecalho'>
          <Link to='/sobrenos' style={{ textDecoration: 'none', outline: 'none' }}>
            <div className='sobre-nos'>
              <img alt='sobre-nos' src={Mais} />
              <p>Sobre nos</p>
            </div>
          </Link>
          <div className='pedidos-ativos'>
            <img alt='pedidos-ativos' src={Sino} />
            <p>Pedidos Ativos</p>
          </div>

          <Link to='/associado' style={{ textDecoration: 'none', outline: 'none' }}>
            <div className='adm-page'>
              <img alt='adm' src={Adm} />
              <p>Pagina do Associado</p>
            </div>
          </Link>
        </div>

        <Link to='/' style={{ textDecoration: 'none', outline: 'none' }}>
          <div className='logo-principal'></div>
        </Link>

        <div className='direita-cabecalho'>
          <Link to='/cardapio' style={{ textDecoration: 'none', outline: 'none' }}>
            <div className='cardapio'>
              <img alt='cardapio' src={Cardapio} />
              <p>Cardapio</p>
            </div>
          </Link>
          <div className='carrinho' onClick={() => setSideBar(!sideBar)}>
            <img alt='Carrinho' src={CarrinhoIcon} />
            <p>Carrinho</p>
          </div>
          <div className='minha-conta'>
            <img alt='minha-conta' src={Conta} />
            {isLogged ?
              <p>Minha Conta</p>
              : <p onClick={() => setOpenLoginModal(!openLoginModal)}>Fazer Login </p>
            }
          </div>
        </div>
      </main>
      <Modal
        isOpen={openLoginModal}
        closeTimeoutMS={500}
        className={'modal'}
        overlayClassName={'modal-overlay'}
        onRequestClose={() => setOpenLoginModal(false)}
      >
        {openCadastroModal ?
          <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Criar Conta</Components.Title>
                <Components.Input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Components.Input type='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Components.Input type='tel' placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                <Components.Button onClick={() => inversao()}>Criar conta</Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Entrar</Components.Title>
                <Components.Input type='email' placeholder='Email' value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
                <Components.Input type='password' placeholder='Senha' value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} />
                <Components.Anchor href='#'>Esqueceu a senha?</Components.Anchor>
                <Components.Button onClick={() => login()}>Entrar</Components.Button>
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Bem-vindo(a)</Components.Title>
                  <Components.Paragraph>
                    Para manter conectado com a gente, por favor, entre com sua conta
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Entrar
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Olá Amigo!</Components.Title>
                  <Components.Paragraph>
                    Entre e aventuresse em nosso cardápio rico e inclusivo
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Entrar
                  </Components.GhostButton>
                </Components.RightOverlayPanel>

              </Components.Overlay>
            </Components.OverlayContainer>

          </Components.Container>
          : <div className='container'>
            <div className='kitar' onClick={() => setOpenCadastroModal(!openCadastroModal)}>
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

                <div className='direitaFin'>
                  <div><input type='text' placeholder='CPF' /></div>
                  <div><input type='text' placeholder='Como você nos conheceu?' /></div>
                  <h1>DOM CORLEONE</h1>
                  <h2>Tradição Italiana</h2>
                  <button onClick={addCliente}>Finalizar Cadastro</button>
                  <p>Ao criar uma conta, você concorda com nossos<br /> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
                </div>
              </div>
            </div>
          </div>}
      </Modal>
      {sideBar && <Carrinho onClose={() => setSideBar(false)} />}
      <ToastContainer />
    </>
  )
}
