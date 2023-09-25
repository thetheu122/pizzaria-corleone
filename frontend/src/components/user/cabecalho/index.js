import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Components from './Components';

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

export default function Cabecalho() {
    const [isLogged, setIsLogged] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const [signIn, toggle] = useState(true);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const [cadastro, setCadastro] = useState(true);
  const [continuacaoCadas, setContinuacaoCadas] = useState(false);

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
      setCadastro(!cadastro)
      setContinuacaoCadas(!continuacaoCadas)
    }
  }

  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')
  
  const navigate = useNavigate()
  const login = async () => {
    try {
      let response = await axios.get(`http://localhost:5000/cliente/login?email=${email}&senha=${senha}`)
      if (response.data.length == 1) {
        toast.info("Login realizado com sucesso")
        
      }
      else {
        toast.error("Falha ao realizar o Login")
      }
    } catch (error) {

    }

  }


    return (
        <>
        {cadastro &&
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
            <Modal
                isOpen={openLoginModal}
                closeTimeoutMS={500}
                className={'modal'}
                overlayClassName={'modal-overlay'}
                onRequestClose={() => setOpenLoginModal(false)}
            >
                <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Criar Conta</Components.Title>
                      <Components.Input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                      <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <Components.Input type='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                      <Components.Button>Criar conta</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Entrar</Components.Title>
                       <Components.Input type='email' placeholder='Email' value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>
                       <Components.Input type='password' placeholder='Senha' value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} />
                       <Components.Anchor href='#'>Esqueceu a senha?</Components.Anchor>
                       <Components.Button>Entrar</Components.Button>
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
            </Modal>
            {sideBar && <Carrinho onClose={() => setSideBar(false)} />}
        </main>}
        {continuacaoCadas && <CadastroPart2 inversao={inversao} nome={nome} telefone={telefone} senha={senha} email={email} />}
        <ToastContainer />
        </>
    )
}