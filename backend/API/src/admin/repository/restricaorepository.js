import { con } from "../../conection.js";


export async function inserirrestricao(){

    const comando = `
    INSERT INTO tb_restricao (id_produto,ds_restricao )
				  VALUES ( ? , ?) ;
    ` 
}