
import './index.scss'
import Restaurante from '../../assets/img/restaurante comp.png';
import Fundo from '../../assets/img/retangulo.png';



export default function CompSobre() {
    return(
        <div className="comp-sobre-nos">
            <div className="containerrr">
                <div className="titulo">
                    <h1>A Corleone Pizzaria</h1>
                </div>

                <div className="conteudo">
                    <div className="esquerda">
                        <img src={Restaurante} />
                    </div>

                    <div className="direita">
                        <div><h1>O Sabor Autêntico da Itália!</h1></div>
                        <p> Quando você escolhe a Corleone Pizzaria, não está apenas saboreando uma pizza excepcional, mas também fazendo parte de nossa história. Somos uma empresa comprometida em proporcionar momentos memoráveis, reunindo famílias e amigos em torno da mesa, celebrando a vida e compartilhando risadas.</p>
                        <span>Convidamos você a se juntar a nós nesta jornada gastronômica única. Deixe-nos transportar você para a Itália, mesmo que esteja a milhares de quilômetros de distância. Descubra a magia da culinária italiana, com um toque especial do Brasil, na Corleone Pizzaria.</span>
                       <div className=' butao'>
                            <button>Mais sobre nos</button>
                        </div>  
                                                                                                            
                    </div>
                </div>
               
            </div>
        </div>
    )
}