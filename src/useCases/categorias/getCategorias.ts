import { Request, Response } from "express";

import { Categoria } from "../../models/Produtos/Categoria";

export async function getCategorias(req: Request, res:Response) {
  const categorias = await Categoria.find();
  res.json(categorias);
}
