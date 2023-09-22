import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" className="btn solid" />
                                <p className="social-text">Or Sign in with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </form>
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" className="btn" value="Sign up" />
                                <p className="social-text">Or Sign up with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ?</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                    ex ratione. Aliquid!
                                </p>
                                <button className="btn transparent" onClick={handleSignUpClick}>
                                    Sign up
                                </button>
                            </div>
                            <img src="img/log.svg" className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    laboriosam ad deleniti.
                                </p>
                                <button className="btn transparent" onClick={handleSignInClick}>
                                    Sign in
                                </button>
                            </div>
                            <img src="img/register.svg" className="image" alt="" />
                        </div>
                    </div>
                </div>
            </Modal>
            {sideBar && <Carrinho onClose={() => setSideBar(false)} />}
        </main>
    )
}