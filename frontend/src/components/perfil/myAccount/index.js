import './index.scss'
import Logo from '../../../assets/images/logo.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function MyAccount() {

    //DADOS DO CLIENTE
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [cpf, setCpf] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [num, setNum] = useState('')
    const [cep, setCep] = useState('')

    //CONTROLADOR DE EDIÇÃO
    const [edt, setEdt] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                let usuario = localStorage.getItem('usuario-logado');
                usuario = JSON.parse(usuario);
                console.log(usuario.id)
                let rep = await axios.get(`http://localhost:5000/cliente/info?id=${usuario.id}`);
                let response = rep.data
                console.log(response)
                setBairro(response.bairro)
                setCep(response.cep)
                setCidade(response.cidade)

                const nomeCompleto = response.cliente;
                const partesNome = nomeCompleto.split(' ');

                const n = partesNome[0]; 
                const s = partesNome.slice(1).join(' '); 
                setNome(n)
                setSobrenome(s)

                setCpf(response.cpf)

                const data = response.dtnascimento
                const numeros = data.split('/');

                const d = parseInt(numeros[0], 10);
                const m = parseInt(numeros[1], 10);
                const a = parseInt(numeros[2], 10);
                setDia(d)
                setMes(m)
                setAno(a)
                
                setEmail(response.email)
                setUf(response.estado)
                setNum(response.numero)
                setSenha(response.senha)
                setTelefone(response.telefone)

            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="minhaConta">
            <img className='logoCorleone' src={Logo} />
            <h1>Minha Conta</h1>

            <div className='baixoMinhaConta'>
                <div className='esquerdaMinhaConta'>
                    <p>Conta</p>
                    <input placeholder='Email' value={email} />

                    <div className='senhaTelefone'>
                        <input placeholder='Senha' type='password' value={senha} />
                        <input placeholder='Telefone' value={telefone} />
                    </div>

                    <p>Dados Pessoais</p>
                    <input placeholder='Nome' value={nome} />
                    <input placeholder='Sobrenome' value={sobrenome} />
                    <div className='dataNascimento' >
                        <input placeholder='Dia' value={dia} />
                        <input placeholder='Mês' value={mes} />
                        <input placeholder='Ano' value={ano} />
                    </div>
                </div>

                <div className='direitaMinhaConta'>
                    <input className='cpfzin' placeholder='CPF' value={cpf} />

                    <p>Logradouro</p>
                    <input placeholder='UF' value={uf} />
                    <input placeholder='Cidade' value={cidade} />
                    <input placeholder='Bairro' value={bairro} />
                    <div className='metadinha'>
                        <input placeholder='Num.' value={num} />
                        <input placeholder='CEP' value={cep} />
                    </div>

                </div>

            </div>
            <div className='duplada'>
                <button className='butaum'>Editar</button>
                <button className='butaumm'>Método de Pagamento</button>
            </div>
        </div>
    )
};