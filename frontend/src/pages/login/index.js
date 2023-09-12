import './index.scss'
import Instagram from '../../assets/img/insta 1.png'
import Google from '../../assets/img/google 1.png'


export default function Login() {
  return (
    <div className="pagina-login">
      <div className='container'>
        <h1>Login</h1>
        <div className='divisao'></div>
        <div className='login'>
            <div><input type='text' placeholder='Email' /></div>
            <div><input type='text' placeholder='Senha' /></div>
            <a href=''>Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className='separacao'>
            <div></div><p>ou</p><div></div>
        </div>
        <div className='plataformas'>
            <div><a href=''><img src={Google} /></a></div>
            <div><a href=''><img src={Instagram} /></a></div>
        </div>
      </div>
    </div>
  );
}


