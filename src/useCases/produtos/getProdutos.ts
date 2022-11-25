import { Request, Response } from "express";

import { Produto } from "../../models/Produtos/Produto";

export async function getProdutos(req: Request, res:Response) {
  const produtoData = await Produto.find();
  res.json(produtoData);
}
