import React, { useState } from 'react';
import './index.scss';
import SetaEsquerda from '../../assets/img/seta-preta 1.png';
import Google from '../../assets/img/google 1.png';
import Facebook from '../../assets/img/Vector.png';
import Instagram from '../../assets/img/insta 1.png';
import Iphone from '../../assets/img/maca 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CadastroPart2 from '../cadastropart2';

function App(props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const [cadastro, setCadastro] = useState(true);
  const [continuacaoCadas, setContinuacaoCadas] = useState(false);

  const inversao = () =>{
    setCadastro(!cadastro)
    setContinuacaoCadas(!continuacaoCadas)
  }



  return (

    <div className="pag-cadastro">
      {cadastro && 
      <div className='container'>
        <div className='esquerda'>
          <div className='sair'>
            <img src={SetaEsquerda} />
            <p>Voltar</p>
          </div>

          <div className='bemvindo'>
            <h1>Bem-vindo<br /> de volta</h1>
            <p>Acesse sua conta agora <br /> mesmo.</p>
            <Link to='/login'>
              <button>Entrar</button>
            </Link>
            <a href=''>Esqueceu a senha?</a>
          </div>

        </div>


        <div className='direita'>
          <h2>Crie sua conta</h2>

          <div className='divisao'>
            <div></div>
            <p>Acesso Rápido</p>
            <div></div>
          </div>

          <div className='plataformas'>
            <div>
              <a href=''><img src={Google} /></a>
            </div>

            <div>
              <a href=''><img src={Facebook} /></a>
            </div>

            <div>
              <a href=''><img src={Instagram} /></a>
            </div>

            <div>
              <a href=''><img src={Iphone} /></a>
            </div>
          </div>


          <div className='divisao'>
            <div></div>
            <p>Ou</p>
            <div></div>
          </div>

          <div className='inputs'>
            <div>
              <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome Completo' />
            </div>

            <div>
              <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
            </div>

            <div>
              <input type='text' value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' />
            </div>

            <div>
              <input type='text' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
            </div>
          </div>

          
            <div className='final'>
                <button onClick={inversao}>Criar conta</button>
              <p>
                Ao criar uma conta, você concorda com nossos<br />{' '}
                <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a>
              </p>
            </div>
          

        </div>



      </div>}
      {continuacaoCadas && <CadastroPart2 inversao={inversao}nome={nome} telefone={telefone} senha={senha} email={email}/>}
    </div>
  );
}

export default App;