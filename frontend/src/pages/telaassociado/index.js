import './index.scss'
import '../../assets/config/fonts-config.scss'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function TelaAssociado() {

  const [nome, setnome] = useState('')
  const [email, setemail] = useState('')
  const [senha, setsenha] = useState('')
  const [cnpj, setcpnj] = useState('')

  const navigate = useNavigate()


  async function entrar() {


    try {

      let associadoo = {
        nome: nome,
        email: email,
        senha: senha,
        cnpj: cnpj
      }

      const response = await axios.put('http://localhost:5000/usuarioadm/login', associadoo);

      console.log(response)
      if (response.status === 200) {
        toast.info("Login efetuado com sucesso");
        navigate('/cadastroproduto')

      }
    }
    catch (error) {

      if (error.response) {
        alert(error.response.data.erro);
      } else {
        alert(error.message);
      }
    }
  }



  return (
    <div className="login-associado">

      <div className='direitaaaaa'>
        <h2>Entrar na Conta Associada</h2>



        <div className='inputssss'>
          <div>
            <input type='text' placeholder='Nome completo' value={nome} onChange={e => setnome(e.target.value)} />
          </div>

          <div>
            <input type='text' placeholder='E-mail' value={email} onChange={e => setemail(e.target.value)} />
          </div>

          <div>
            <input type='text' placeholder='Senha' value={senha} onChange={e => setsenha(e.target.value)} />
          </div>

          <div>
            <input type='number' placeholder='CNPJ' value={cnpj} onChange={e => setcpnj(e.target.value)} />
          </div>
        </div>

        <div className='final'>
          <button onClick={() => entrar()}>Entrar</button>
          <p>Ao criar uma conta, você concorda com nossos<br /> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
        </div>

      </div>

      <div className='containeer'>
        <div className='esquerda'>


          <div className='bemvindo'>
            <h1>Bem-vindo<br /> <strong>Associado!</strong> </h1>

            <p>Gerencie suas operações agora mesmo. </p>

            <a href=''>Clicou errado?</a>

            <Link to='/' style={{ textDecoration: 'none', outline: 'none' }}>
              <button>Voltar</button>
            </Link>
          </div>

        </div>




      </div>
    </div>
  );
}
