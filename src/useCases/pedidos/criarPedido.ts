import { Request, Response } from "express";

import { Pedido } from "../../models/Produtos/Pedido";

export async function criarPedido(req: Request, res:Response) {
  try{
    const {cliente, produtos, tipoPagamento, cpfCliente,
      status, dataEntrega, isEncomenda, valorTotal} = req.body;

    // produtos exemplo -> '[{"produto":"638136d5e80aec9c97709a6c","quantidade": 2},{"produto":"63813bc191622f795ad21ae8","quantidade": 1}]'

    const pedidoData = await Pedido.create({
      cliente,
      produtos,
      tipoPagamento,
      cpfCliente,
      status,
      dataEntrega,
      isEncomenda: Boolean(isEncomenda),
      valorTotal:Number(valorTotal)
    });
    res.json(pedidoData);
  } catch (error){
    console.log(error);
    res.status(500).send(error);
  }
}
