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


    return (
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
                      <Components.Input type='text' placeholder='Nome' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Senha' />
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button>Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Bem-vindo(a)</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
            </Modal>
            {sideBar && <Carrinho onClose={() => setSideBar(false)} />}
        </main>
    )
}