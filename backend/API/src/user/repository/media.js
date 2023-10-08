import { listarporcomentario } from "../../admin/repository/produtorepository.js";
import { con } from "../../conection.js";

export async function media(mediaa){


const comando = `
    INSERT INTO tb_media (id_produto, ds_media) VALUES (?, ?)
`;

const [resposta] = await con.query(comando, [mediaa.id,mediaa.mediaa]);
produto.id = resposta.insertId;
return produto;

}





