import './index.scss'
import Logo from '../../../assets/images/logo.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Aberto from '../../../assets/images/pictures/olho-aberto.svg'
import Fechado from '../../../assets/images/pictures/olho-fechado.svg'
import { toast } from 'react-toastify'

export default function MyAccount() {

    //DADOS DO CLIENTE
    const [id, setiD] = useState(0)
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

    //CONTROLADOR DE SENHA
    const [showPassword, setShowPassword] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                let usuario = localStorage.getItem('usuario-logado');
                usuario = JSON.parse(usuario);
                setiD(usuario.id)
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

    const alterarUser = async () => {
        try {
            


        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    };


    return (
        <div className="minhaConta">
            <img className='logoCorleone' src={Logo} />
            <h1>Minha Conta</h1>

            <div className='baixoMinhaConta'>
                <div className='esquerdaMinhaConta'>
                    <p>Conta</p>
                    <input placeholder='Email' value={email} disabled={!edt} onChange={(e) => setEmail(e.target.value)} />

                    <div className='senhaTelefone'>
                        <div className='senha'>
                            <input className='in' disabled={!edt} placeholder='Senha' type={showPassword ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
                            {showPassword ? <img src={Aberto} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(false)}/> : <img src={Fechado} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(true)}/>}
                        </div>

                        <input placeholder='Telefone' value={telefone} disabled={!edt} onChange={(e) => setTelefone(e.target.value)} />
                    </div>

                    <p>Dados Pessoais</p>
                    <input placeholder='Nome' value={nome} disabled={!edt} onChange={(e) => setNome(e.target.value)} />
                    <input placeholder='Sobrenome' value={sobrenome} disabled={!edt} onChange={(e => setSobrenome(e.target.value))} />
                    <div className='dataNascimento' >
                        <input placeholder='Dia' value={dia} disabled={!edt} onChange={(e => setDia(e.target.value))} />
                        <input placeholder='Mês' value={mes} disabled={!edt} onChange={(e => setMes(e.target.value))} />
                        <input placeholder='Ano' value={ano} disabled={!edt} onChange={(e => setAno(e.target.value))} />
                    </div>
                </div>

                <div className='direitaMinhaConta'>
                    <input className='cpfzin' placeholder='CPF' value={cpf} disabled={!edt} onChange={(e => setCpf(e.target.value))} />

                    <p>Logradouro</p>
                    <input placeholder='UF' value={uf} disabled={!edt} onChange={(e => setUf(e.target.value))} />
                    <input placeholder='Cidade' value={cidade} disabled={!edt} onChange={(e => setCidade(e.target.value))} />
                    <input placeholder='Bairro' value={bairro} disabled={!edt} onChange={(e => setBairro(e.target.value))} />
                    <div className='metadinha'>
                        <input placeholder='Num.' value={num} disabled={!edt} onChange={(e => setNum(e.target.value))} />
                        <input placeholder='CEP' value={cep} disabled={!edt} onChange={(e => setCep(e.target.value))} />
                    </div>

                </div>

            </div>
            <div className='duplada'>
                <button className='butaum' onClick={() => setEdt(!edt)}>Editar</button>
                <button className='butaumm'>Método de Pagamento</button>
            </div>
        </div>
    )
};