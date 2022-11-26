import { Request, Response } from "express";

import { Categoria } from "../../models/Produtos/Categoria";

export async function criarCategoria(req: Request, res:Response) {
  try{
    const imagePath = `uploads/categorias/${req.file?.filename}`;


    const { nome } = req.body;
    const categorias = await Categoria.create({nome, imagePath});
    res.json(categorias);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
