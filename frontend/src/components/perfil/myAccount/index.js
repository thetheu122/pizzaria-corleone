import './index.scss'
import Logo from '../../../assets/images/logo.svg'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';

import Aberto from '../../../assets/images/pictures/olho-aberto.svg'
import Fechado from '../../../assets/images/pictures/olho-fechado.svg'
import { ToastContainer, toast } from 'react-toastify'

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
    const [rua, setRua] = useState('')
    const [num, setNum] = useState('')
    const [cep, setCep] = useState('')

    //CONTROLADOR DE EDIÇÃO
    const [edt, setEdt] = useState(false)

    //CONTROLADOR DE SENHA
    const [showPassword, setShowPassword] = useState(false)

    const refMes = useRef(null);
    const refAno = useRef(null);

    const handleDiaChange = (event) => {
        const inputValue = event.target.value;
        setDia(inputValue);

        if (inputValue.length === 2) {
            // Quando o campo de dia atingir 2 dígitos, mude o foco para o campo de mês
            refMes.current.focus();
        }
    }

    const handleMesChange = (event) => {
        const inputValue = event.target.value;
        setMes(inputValue);

        if (inputValue.length === 2) {
            // Quando o campo de mês atingir 2 dígitos, mude o foco para o campo de ano
            refAno.current.focus();
        }
    }



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
                setRua(response.rua)

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

                setEdt(false)

            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    const alterarUser = async () => {
        try {
            if (!nome || !sobrenome) {
                throw new Error(`Campo de nome e/ou sobrenome vazio`);
            }

            let nomeCompleto = `${nome} ${sobrenome}`
            let dtnascimento = `${dia}/${mes}/${ano}`

            let newInfos = {
                nome: nomeCompleto,
                email: email,
                telefone: telefone,
                senha: senha,
                cpf: cpf,
                nascimento: dtnascimento,
                estado: uf,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                numero: num,
                cep: cep
            }
            const data = JSON.parse(localStorage.getItem('usuario-logado'));

            let response = await axios.put(`http://localhost:5000/cliente/alterar?id=${data.id}`, newInfos)

            data.nome = nomeCompleto
            data.email = email
            localStorage.setItem('usuario-logado', JSON.stringify(data));
            window.location.reload();

            setEdt(!edt)
        } catch (error) {
            toast.error(error.message)
        }
    };


    const formatCep = (value) => {
        const numericValue = value.replace(/\D/g, '');

        let cepFormated = numericValue.replace(/(\d{5})(\d{3})/, '$1-$2');
        setCep(cepFormated)
    };

    const formatTelefone = (value) => {
        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length <= 10) {
            let n = numericValue.replace(
                /(\d{2})(\d{4})(\d{4})/,
                '$1 $2-$3');
            setTelefone(n)

        } else {
            let m = numericValue.replace(
                /(\d{2})(\d{5})(\d{4})/,
                '($1) $2-$3'
            );
            setTelefone(m)
        }
    };

    const formatCpf = (value) => {
        const numericValue = value.replace(/\D/g, '');

        const formattedCpf = numericValue.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4'
        );

        setCpf(formattedCpf)
    };

    const showConfirmationDialog = () => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div className="custom-confirm-dialog">
                    <h1>Alteração de Dados</h1>
                    <p>Ao selecionar "Sim", você confirmar as alterações feitas nos campos.</p>
                    <div>
                        <button onClick={() => {
                            alterarUser()
                            onClose();
                        }}>Sim</button>
                        <button onClick={() => {
                            onClose();
                        }}>Não</button>
                    </div>
                </div>
            ),
        });
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
                            {showPassword ? <img src={Aberto} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(false)} /> : <img src={Fechado} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(true)} />}
                        </div>

                        <input placeholder='Telefone' value={telefone} disabled={!edt} onChange={(e) => formatTelefone(e.target.value)} />
                    </div>

                    <p>Dados Pessoais</p>
                    <input placeholder='Nome' value={nome} disabled={!edt} onChange={(e) => setNome(e.target.value)} />
                    <input placeholder='Sobrenome' value={sobrenome} disabled={!edt} onChange={(e => setSobrenome(e.target.value))} />
                    <div className='dataNascimento' >
                        <input placeholder='Dia' value={dia} disabled={!edt} onChange={handleDiaChange} />
                        <input placeholder='Mês' value={mes} disabled={!edt} onChange={(e => setMes(e.target.value))} />
                        <input placeholder='Ano' value={ano} disabled={!edt} ref={refMes} onChange={handleMesChange} />
                    </div>
                </div>

                <div className='direitaMinhaConta'>
                    <input className='cpfzin' placeholder='CPF' value={cpf} disabled={!edt} onChange={(e => formatCpf(e.target.value))} />

                    <p>Logradouro</p>
                    <div className='metadinha'>
                        <input placeholder='UF' value={uf} disabled={!edt} onChange={(e => setUf(e.target.value))} />
                        <input placeholder='Cidade' value={cidade} disabled={!edt} onChange={(e => setCidade(e.target.value))} />
                    </div>
                    <input placeholder='Bairro' value={bairro} disabled={!edt} onChange={(e => setBairro(e.target.value))} />
                    <input placeholder='Rua' value={rua} disabled={!edt} onChange={(e => setRua(e.target.value))} />
                    <div className='metadinha'>
                        <input placeholder='Num.' value={num} disabled={!edt} onChange={(e => setNum(e.target.value))} />
                        <input placeholder='CEP' value={cep} disabled={!edt} onChange={(e => formatCep(e.target.value))} />
                    </div>

                </div>

            </div>
            <div className='duplada'>
                {edt ?
                    <button className='butaum' onClick={showConfirmationDialog}>Salvar</button>
                    : <button className='butaum' onClick={() => setEdt(!edt)}>Editar</button>}
                <button className='butaumm'>Método de Pagamento</button>
            </div>
            <ToastContainer />
        </div>
    )
};