import './index.scss'


export default function Cadastrarproduto(){
    return (
        <div className='connt'>
            <div className='comp' >
            
            </div>


        

        
            <div className='cont' >
            

               <div className='tit' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>
              

                <div className='img'>
                    <div className='ti-h1'>
                        <h1>Adicionar uma imagem +</h1>
                    </div>
                </div>

                <div className='dadosdoproduto'>
                    <div className='nome'>
                        <p>Nome:</p>
                        <input type='text' placeholder='Escreva..'/>
                    </div>

                    <p className='linha'> </p>

                    <div className='b-produto'>
                     <h1>Seu Produto é...</h1>  


                  <div className='prod'>
                  <div className='in'>
                  <input className= "tay" type="checkbox" />
                  <p className='nomeproduto'>Vinho</p>
                  </div>

                  <div className='in'>
                  <input className= "tay" type="checkbox" />
                  <p className='nomeproduto'>Sobremesa</p>
                  </div>

                  <div className='in'>
                   <input className= "tay" type="checkbox" />
                   <p className='nomeproduto'>Salgado</p>
                   </div>
                   </div>

                   <p className="linha"></p>

                    </div>

                    <div className='ingredientes'>
                        <h1>Ingredientes:</h1>
                        <input type='text' placeholder='Escreva..'/>
                    </div>

                    <p className='linha'></p>

                    <div className='preferencia'>
                        <h1>Pessoas com preferencias alimentares/alergias podem comer</h1>

                        <div className='pref-prod'>
                               
                        <div className='in'>     
                        <input className="tay2" type="checkbox" />
                        <p className='nomeproduto'>Glúten</p>
                        </div>

                        <div className='in'> 
                        <input className="tay2" type="checkbox" />
                        <p className='nomeproduto'>Ovo</p>
                        </div>
                          
                        <div className='in'> 
                        <input className="tay2" type="checkbox" />
                        <p className='nomeproduto'>Leite e seus derivados</p>
                        </div> 

                        </div>  

                        </div>

                       <div className='pref-prod'>

                        <div className='in'>  
                        <input className="tay2" type="checkbox" />
                        <p className='nomeproduto'>Vegetariano</p>
                        </div> 

                        <div className='in'>   
                        <input className="tay2"  type="checkbox" />
                        <p className='nomeproduto'>Vegano</p>
                        </div> 
                      

                    </div>

                    <p className='linha'></p>

                    <div className='valor'>
                        <h1>Qual o preço do seu produto?</h1>
                        <p>R$--,--</p>
                    </div>

                    <p className='linha'></p>

                    <div className='descricao'>
                        <h1>Adicione uma descrição do seu produto</h1>
                        <input type='text' placeholder='Escreva..'/>
                    </div>

                    <div className='fin-botao'>
                        <button>Finalizar Cadastro</button>
                    </div>

                </div>
                </div>
            </div>
             </div>

      
       
    )
}