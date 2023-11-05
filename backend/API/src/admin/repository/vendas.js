import { con } from '../../conection.js'

export async function ListarVendas() {
    let comando = `
    SELECT
    tb_pedido.id_pedido,
    tb_pedido.id_cliente,
    tb_pedido.id_tipo_pagamento,
    tb_tp_pagamento.id_tp_pagamento,
    tb_tp_pagamento.tp_pix,
    tb_tp_pagamento.tp_dinheiro,
    tb_pedido.ds_nota_pag,
    tb_pedido.dt_pedido,
    tb_pedido.ds_situacao
FROM
    tb_pedido
INNER JOIN
    tb_tp_pagamento
ON
    tb_pedido.id_tipo_pagamento = tb_tp_pagamento.id_tp_pagamento
    `

    const [resposta] = await con.query(comando)
    return resposta;
}