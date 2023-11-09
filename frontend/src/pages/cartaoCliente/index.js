import './index.scss'
import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from 'react';
import axios from 'axios'

import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast, useToastContainer } from 'react-toastify'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function Cartaocliente(){

    const { id } = useParams();
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
    const [cartao, setCartao]=useState([])

    const data = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    const [cardDetails, setCardDetails] = useState(data);
    const [edt, setEdt] = useState(true);


    const [pagController, setPagController] = useState(true)

    const handleInputFocus = (e) => {
        setCardDetails({ ...cardDetails, focus: e.target.name });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

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


//listar por id - cada cliente

async function cartaoid(id){
    const r= await axios.get(`http://localhost:5000/cartao/listar/${id}`)
    setCartao(r.data)

}

useEffect(()=>{
    cartaoid(id)
}, id)


return(
    <div className='pagina-cartao'>
         <CompAtalhosAdm />

         <div className='container-cartao'>
         <div className='cabecalho-cartao'>
                    <h1>Clientes</h1>
                </div>

                <div className='subtitulo-cartao'>
                    <h1>Cartão</h1>
                </div>

        
                <div className='cartaoSide'>
                    <Cards
                        cvc={cardDetails.cvc}
                        expiry={cardDetails.expiry}
                        focused={cardDetails.focus}
                        name={cardDetails.name}
                        number={cardDetails.number}
                    />
                    <div>

                        {cartao.map(item=>
                        <form className='formsCartao'>
                            <input
                                type="number"
                                name="number"
                                placeholder="Número"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.number}
                                maxLength={16}
                                className="no-spinners" 
                                disabled={!edt}
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.name}
                                disabled={!edt}
                            />
                            <div className='expiraCartao'>
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/AA Expiração"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    value={cardDetails.expiry}
                                    disabled={!edt}
                                />
                                <input
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    value={cardDetails.cvc}
                                    maxLength={3}
                                    disabled={!edt}
                                />
                            </div>
                        </form>
                        )}
                    </div>
                    
                </div>
           

         </div>

        

    </div>
)
}