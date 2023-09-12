import './index.scss'
import { useState } from "react"

export default function TelaAssociado() {

  const [nome, setnome] = useState('')
  const [email, setemail] = useState('')
  const [senha, setsenha] = useState('')
  const [cnpj, setcpnj] = useState('')
  const [associado, setassociado] = useState([])

  function entrar() {
    let associadoo = {
      nome: nome,
      email: email,
      senha: senha,
      cpnj: cnpj
    }

    setassociado([...associado, associadoo])

  }


  return (
    <div className="pag-cadastro">

      <div className='direita'>
        <h2>Entrar na Conta Associada</h2>



        <div className='inputs'>
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
          <button>Entrar</button>
          <p>Ao criar uma conta, você concorda com nossos<br /> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
        </div>

      </div>

      <div className='containeer'>
        <div className='esquerda'>
          <div className='sair'>


          </div>

          <div className='bemvindo'>
            <h1>Bem-vindo<br /> Associado!</h1>
            <p>Gerencie suas operações agora mesmo. <br /> </p>
            <a href=''>Clicou errado?</a>
            <button>Voltar</button>

          </div>

        </div>




      </div>
    </div>
  );
}
