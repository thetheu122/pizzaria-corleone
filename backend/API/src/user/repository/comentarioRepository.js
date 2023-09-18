import { con } from "../../conection.js";


export async function inserircometario( comentario){
    const comando =
     `INSERT INTO tb_comentario ( ds_comentario)
                         VALUES ( ?)
    ` 

const [ resposta] = await con.query( comando , [comentario.comentario ])

comentario.id = resposta.insertId
return comentario
}


export  async function listarcomentario(){

	const comando = `
	
    SELECT id_comentario  as ID,
    ds_comentario  as Comentario
FROM   tb_comentario;
	`

const [ resposta ]  = await con.query( comando )
return[resposta]



}




export async function alterarcomentario(id , comentario){

	const comando = `
	UPDATE tb_comentario
    SET    ds_comentario  = ?
    WHERE  id_comentario  = ? `

const [resposta] = await con.query( comando , [
 comentario.comentario,
    id 
])



return resposta.affectedRows
}



export async function deletarcomentario (id){

    const comando =`
    DELETE FROM tb_comentario 
    WHERE       id_comentario = ?;
    `
const [ resposta ] = await con.query( comando ,[id])
return resposta.affectedRows


}