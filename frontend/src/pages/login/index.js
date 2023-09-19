import './index.scss'
import '../../assets/config/fonts-config.scss'
import Instagram from '../../assets/img/insta 1.png'
import Google from '../../assets/img/google 1.png'
import { useState } from 'react'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const login = async () => {
    let response = await axios.get(`http://localhost:5000/cliente/login?email=${email}&senha=${senha}`)
    console.log(response)
    if (response.data.length == 1) {
      toast.info("Login realizado com sucesso")
    }
    //apenas teste
    else {
      toast.error("Falha ao realizar o Login")
    }
  }

  return (
    <div className="pagina-login">
      <div className='container'>
        <h1>Login</h1>
        <div className='divisao'></div>
        <div className='login'>
          <div><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /></div>
          <div><input type='text' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' /></div>
          <a href=''>Esqueceu a senha?</a>
        </div>
        <button onClick={login}>Entrar</button>
        <div className='separacao'>
          <div></div><p>ou</p><div></div>
        </div>
        <div className='plataformas'>
          <div><a href=''><img src={Google} /></a></div>
          <div><a href=''><img src={Instagram} /></a></div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
  );
}


