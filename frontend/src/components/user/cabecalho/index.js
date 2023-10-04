import { useState } from 'react'
import * as Components from './Components';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


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
import Informacoes from '../../infoproduto/informacoes';


export default function Cabecalho() {
  const [isLogged, setIsLogged] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openCadastroModal, setOpenCadastroModal] = useState(true)

  const [signIn, toggle] = useState(true);

  const navigate = useNavigate()

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [num, setNum] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({})
  const [cpf, setCpf] = useState('');

  const [captcha, setCaptcha] = useState(false)

  const [cadastro, setCadastro] = useState(true);

  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

  const [idUsuario, setIdUsuario] = useState('');


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
    else if (!captcha) {
      toast.warn('Clique no botão "Não sou um robô"', {
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
      setCaptcha(false)
    }
  }


  const login = async () => {
    try {
      if (!captcha) {
        toast.warn('', {
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
        const logi =
        {
          email: emailLogin,
          senha: senhaLogin
        }
        let response = await axios.post(`http://localhost:5000/cliente/login`, logi)
        setIdUsuario(response.data.id)
        setIsLogged(true)
        setOpenLoginModal(false)

        toast.success("Login realizado com sucesso", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      toast.error(err.response.data.erro);
    }

  }

  const addCliente = async () => {
    try {
      let requestEn = {
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: num,
        cep: cep,
      };
  
      let responseEn = await axios.post('http://localhost:5000/endereco/cadastro', requestEn);
      
    

    //puxar da api o id do ultimo endereco cadastrado
  

    let nascimento = `${dia}/${mes}/${ano}`;

    let requestCl = {
      endereco: responseEn.data.id,
      cliente: nome,
      email: email,
      telefone: telefone,
      senha: senha,
      cpf: cpf,
      nascimento: nascimento
    }

    console.log(requestCl)

    let responseCl = await axios.post('http://localhost:5000/cliente/cadastro', requestCl);

    console.log(responseCl.status)
    if (responseCl.status !== 200) {
      toast.error((`Erro ao cadastrar cliente: ${responseCl.response.data}`), {
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
  } catch (err) {
    toast.error((err.response.data.erro), {
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

 /* const buscarCEP = async (cep) => {
    try {
      if (!cep)
        toast.error(('CEP não fornecido'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      console.log(data)
      setCidade(data.localidade)
      setBairro(data.bairro)
      setEstado(data.uf)
      setRua(data.logradouro)
    } catch (error) {
      toast.error(('CEP digitado invalido'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  };*/


const buscarCEP = async (cep) => {
    try {

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      setRua(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf)

  

    } catch (error) {
        toast.error(('CEP digitado invalido'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }
  }

  const CadastrarEndereco = async () => {

    try {

      setEndereco ( {

        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: num,
        cep: cep,

      })
      
      const resp = await axios.post('http://localhost:5000/endereco/cadastro', endereco)


    } catch (err) {
      toast.error(err.response.data.erro)
    }

  }

 
  return (
    <>
      <main className='cabecalho'>
        <div className='esquerda-cabecalho'>

          <div onClick={() => navigate('/sobrenos')} className='sobre-nos'>
            <img alt='sobre-nos' src={Mais} />
            <p>Sobre nos</p>
          </div>

          <div onClick={() => navigate('/pedidos/ativos')} className='pedidos-ativos'>
            <img alt='pedidos-ativos' src={Sino} />
            <p>Pedidos Ativos</p>
          </div>

          <div onClick={() => navigate('/associado')} className='adm-page'>
            <img alt='adm' src={Adm} />
            <p>Pagina do Associado</p>
          </div>
        </div>

        <div onClick={() => navigate('/')} className='logo-principal'></div>


        <div className='direita-cabecalho'>
          <div onClick={() => navigate('/cardapio')} className='cardapio'>
            <img alt='cardapio' src={Cardapio} />
            <p>Cardapio</p>
          </div>
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
        className={openCadastroModal ? 'modal' : 'modalll'}
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
                <ReCAPTCHA
                  sitekey="6LdHbGsoAAAAAEuxguADWAR5shW3Jy3ZNQHtVbOQ"
                  onChange={() => setCaptcha(true)}
                />
                <Components.Button onClick={() => inversao()}>Criar conta</Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Entrar</Components.Title>
                <Components.Input type='email' placeholder='Email' value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
                <Components.Input type='password' placeholder='Senha' value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} />
                <ReCAPTCHA
                  sitekey="6LdHbGsoAAAAAEuxguADWAR5shW3Jy3ZNQHtVbOQ"
                  onChange={() => setCaptcha(true)}
                />
                <Components.Anchor href='#'>Esqueceu a senha?</Components.Anchor>
                <Components.Button onClick={login}>Entrar</Components.Button>
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Bem-vindo(a)</Components.Title>
                  <Components.Paragraph>
                    Entre e aventuresse em nosso cardápio rico e inclusivo
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Entrar
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Olá Amigo!</Components.Title>
                  <Components.Paragraph>
                    Para manter conectado com a gente, por favor, entre com sua conta
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
                <div className='esquerdaFds'>
                  <Components.Input
                    type='text'
                    placeholder='CEP'
                    value={cep}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                    onBlur={() => buscarCEP(cep)}
                   
                  />


                  <Components.Input type='text' placeholder='Estado' value={estado} onChange={(e) => setEstado(e.target.value)} />
                  <Components.Input type='text' placeholder='Cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} />
                  <Components.Input type='text' placeholder='Bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} />
                  <Components.Input type='text' placeholder='Rua' value={rua} onChange={(e) => setRua(e.target.value)} />
                  <Components.Input type='text' placeholder='Número' value={num} onChange={(e) => setNum(e.target.value)} />
                </div>

                <div className='direitaFin'>
                  <p>Data de Nascimento</p>
                  <div className='data-nascimento'>
                    <input id='diminuicao' className='separacao' type='text' placeholder='Dia' />
                    <input id='diminuicao' className='separacao' type='text' placeholder='Mês' />
                    <input id='diminuicao' type='text' placeholder='Ano' />
                  </div>
                  <Components.Input type='text' placeholder='CPF' className='inputo' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                  <Components.Input type='tel' placeholder='Telefone' className='inputo' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                  <h1>Don Corleone</h1>
                  <button onClick={addCliente}>Finalizar Cadastro</button>
                  <p className='ttt'>Ao criar uma conta, você concorda com nossos<br /> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
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
