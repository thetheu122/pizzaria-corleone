import './index.scss'

import SetaEsquerda from '../../assets/img/seta-preta 1.png'

export default function CadastroPart2() {
  return (
    <div className="pag-cadastro-part2">
      <div className='container'>
        <div className='kitar'>
            <img src={SetaEsquerda} />
            <p>Voltar</p>
        </div>

        <div className='conteudo'>
            <h1>Está quase tudo pronto...</h1>
            <p>Logradouro</p>

            <div className='informacoes'>
                <div className='esquerda'>
                    <div><input type='text' placeholder='Estado'/></div>
                    <div><input type='text' placeholder='Município'/></div>
                    <div><input type='text' placeholder='Rua'/></div>
                    <div><input id='diminuicaopart1' className='separacao' type='text' placeholder='Número'/> <input id='diminuicaopart2' type='text' placeholder='CEP'/></div>
                    <p>Data de Nascimento</p>
                    <div className='data-nascimento'>
                        <input id='diminuicao' className='separacao' type='text' placeholder='Dia'/>
                         <input id='diminuicao' className='separacao' type='text' placeholder='Mês'/>
                         <input id='diminuicao' type='text' placeholder='Ano'/>
                    </div>
                </div>

                <div className='direita'>
                    <div><input type='text' placeholder='CPF'/></div>
                    <div><input type='text' placeholder='Como você nos conheceu?'/></div>
                    <h1>DOM CORLEONE</h1>
                    <h2>Tradição Italiana</h2>
                    <button>Finalizar Cadastro</button>
                    <p>Ao criar uma conta, você concorda com nossos<br/> <a href=''>Termos de Uso</a> e <a href=''>Políticas de Privacidade</a></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}


