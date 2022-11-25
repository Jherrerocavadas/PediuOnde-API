import { Request, Response } from "express";

import { Pedido } from "../../models/Produtos/Pedido";

export async function getPedidos(req: Request, res:Response) {
  const pedidoData = await Pedido.find();
  res.json(pedidoData);
}
