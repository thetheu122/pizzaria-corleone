import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useParams, navigate } from 'react-router-dom';
import CompAtalhosAdm from '../../../components/compAtalhosAdm';
import { API_URL } from '../../../config/constants';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

export default function Cartaocliente(){
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [cartao, setCartao] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [cardDetails, setCardDetails] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  useEffect(() => {
    const obterDadosDoCliente = async () => {
      try {
        const response = await axios.get(`${API_URL}/clientes/cartao/${id}`);

        console.log('Resposta do servidor para obter dados do cliente:', response.data);

        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          const cliente = response.data[0];

          console.log('Dados do cliente:', cliente);

          if (cliente && cliente.idCliente) {
            setCliente(cliente);
          } else {
            console.error('O cliente não possui a propriedade "idCliente".');
          }
        } else {
          console.error('Resposta do servidor não contém dados de cliente válidos.');
        }
      } catch (error) {
        console.error('Erro ao obter dados do cliente', error);
      }
    };

    obterDadosDoCliente();
  }, [id]);

  useEffect(() => {
    if (cliente.cartao) {
      fetchCartao(cliente.cartao);
    }
  }, [cliente]);

  const fetchCartao = async (cartaoId) => {
    try {
      const response = await axios.get(`${API_URL}/cartao/listar/${cartaoId}`);
      setCartao(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do cartão', error);
    }
  };

  const handleCardSelection = (selectedCard, index) => {
    setSelectedCardIndex(index);
    setCardDetails({
      cvc: selectedCard.ds_cvv || '',
      expiry: selectedCard.ds_validade || '',
      focus: '',
      name: selectedCard.ds_nome || '',
      number: selectedCard.ds_numero || '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (selectedCardIndex !== null) {
      setCartao((prevCartao) => {
        const updatedCartao = [...prevCartao];
        const selectedCard = { ...updatedCartao[selectedCardIndex] };

        if (selectedCard[name] !== undefined) {
          selectedCard[name] = value;
        }
        return updatedCartao;
      });
    }
  };



  return (
    <div className="pagina-cartao">
      <CompAtalhosAdm />

      <div className="container-cartao">
        <div className="cabecalho-cartao">
          <h1>Clientes</h1>
        </div>

        <div className="subtitulo-cartao">
          <h1>Cartão</h1>
        </div>

        <div className="cartaoSide">
          <Cards
            cvc={cardDetails?.ds_cvv || ''}
            expiry={cardDetails?.ds_validade || ''}
            focused={cardDetails?.focus || ''}
            name={cardDetails?.ds_nome || ''}
            number={cardDetails?.ds_numero || ''}
          />

          <div>
            {cartao.map((itemArray, outerIndex) => (
              <form className="formsCartao" key={outerIndex}>
                {itemArray.map((item, innerIndex) => (
                  <React.Fragment key={innerIndex}>
                    <input
                      type="number"
                      name="ds_numero"
                      placeholder="Número"
                      value={item.ds_numero}
                      onChange={() => handleInputChange(item)}
                    />
                    <input
                      type="text"
                      name="ds_nome"
                      placeholder="Nome"
                      value={item.ds_nome}
                      onChange={() => handleInputChange(item)}
                    />
                    <div className="expiraCartao">
                      <input
                        type="text"
                        name="ds_validade"
                        placeholder="MM/AA Expiração"
                        value={item.ds_validade}
                        onChange={() => handleInputChange(item)}
                      />
                      <input
                        type="tel"
                        name="ds_cvv"
                        placeholder="CVC"
                        value={item.ds_cvv}
                        onChange={() => handleInputChange(item)}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

